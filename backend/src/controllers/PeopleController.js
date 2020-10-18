import db from '../db/connection'

// url: http://localhost:3333/pessoas
// listar todos as pessoas cadastradas
const index = async function (req, res) {
    const data = await db('person').select('*')

    if (!data) {
        return res.status(404).json({
            error: {
                msg: 'Erro na requisição'
            }
        })
    }

    return res.json(data)
}

// url: http://localhost:3333/:id
// lista os dados e os contatos da pessoa
const show = async function (req, res) {
    const { id } = req.params

    const data = await db('person').select('*').where({ id }).first()
    const dataContacts = await db('contact_person').where({
        person_id: id
    }).join('type_contact', 'type_contact.id', "=", 'contact_person.type_contact_id')
    .select([
        'contact_person.*',
        'type_contact.name',
    ])

    if (!data) {
        return res.status(404).json({
            error: {
                msg: 'Pessoa nao encontrada'
            }
        })
    }

    return res.json({
        dataPerson: data,
        dataContacts
    })
}

// url: http://localhost:3333/pessoa/cadastro
// adiciona uma pessoa recebendo o nome e sobrenome pelo corpo da requisição
const create = async function (req, res) {
    const { name, surname } = req.body


    await db('person').insert({
        name,
        surname,
    }).returning('*').then(response => {
        return res.json({
            sucess: true,
            data: response[0]
        })
    }, err => {
        return res.status(400).json({
            error:{
                msg: 'ID invalido'
            }
        })
    })
}

// url: http://localhost:3333/:id/editar
// atualiza os dados de uma pessoa a partir do id
const update = async function (req, res) {
    const { id } = req.params

    const { name, surname } = req.body

    await db('person').where({ id }).update({
        name,
        surname
    }).then(response => {
        return res.json({
            success: true,
            id,
            name,
            surname
        })
    }, err => {
        return res.status(400).json({
            error:{
                msg: 'ID invalido'
            }
        })
    })
    
}

// url: http://localhost:3333/pessoa/:id
// remove uma pessoa a partir do id informado
const destroy = async function (req, res) {
    const { id } = req.params

    const person = await db('person').select('*').first().where({ id })

    if (!person) {
        return res.status(404)
    }

    // o uso do transaction é para caso a pessoa tenha 1 ou mais contatos armazenados,
    // ele vai excluir todos os contatos para depois excluir a pessoa
    const trx = await db.transaction()

    await trx('contact_person').where({ person_id: id }).delete()

    await trx('person').where({id}).delete()

    await trx.commit()

    return res.status(204).send()
}

export default {
    index,
    show,
    create,
    update,
    destroy
}
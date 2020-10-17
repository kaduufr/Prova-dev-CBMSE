import db from '../db/connection'

// listar todos as pessoas cadastradas
const index = async function (req, res) {
    const data = await db('person').select('*')

    if (!data) {
        return res.error(new Error())
    }

    return res.json(data)
}

// 
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
const create = async function (req, res) {
    const { name, surname } = req.body


    await db('person').insert({
        name,
        surname,
    }).then(response => {
        return res.json({
            sucess: true,
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
const destroy = async function (req, res) {
    const { id } = req.params

    await db('person').where({ id }).del()
    .then(sucess => {
        return res.json({
            success: true,
            msg: "user desotry with successfull"
        })
    }, err => {
        return res.status(400).json({
            error:{
                msg: 'ID invalido'
            }
        })
    })
}

export default {
    index,
    show,
    create,
    update,
    destroy
}
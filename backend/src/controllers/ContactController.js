import db from '../db/connection'

// url: http://localhost:3333/:id/contatos/adicionar
// adiciona um novo contato no bd
const create = async function (req, res) {
    const { id } = req.params
    const { contact, type_contact_id } = req.body

    const data = {
        contact,
        person_id: id,
        type_contact_id
    }
    await db('contact_person').insert(data).then(success => {
        return res.json({
            success: true,
            data
        })
    }, err => {
        return res.json({
            success: false,
            error: {
                msg: 'erro ao criar contato'
            }
        })
    })
}

// url: http://localhost:3333/:id/contato/editar/:contact_id
//  atualiza um contato atraves do id da pessoa, e o id do contato
const update = async function (req, res) {
    const { id: person_id, contact_id} = req.params
    const { contact, type_id } = req.body

    await db('contact_person').where({ person_id, id: contact_id }).update({
        contact,
        type_contact_id: type_id
    }).then(response => {
        return res.json({
            success: true,
            id: contact_id,
            contact,
            person_id,
            type_contact_id: type_id
        })
    }, err => {
        return res.status(400).json({
            error:{
                msg: 'ID invalido'
            }
        })
    })

}

// url: http://localhost:3333/:id/contato/:contact_id
// remove um contato atraves do id da pessoa e do contato
const destroy = async function (req, res) {
    const { id: person_id, contact_id} = req.params

    await db('contact_person').where({ person_id, id: contact_id }).del()
        .then(success => {
            return res.json({
                success: true,
                msg: "Contato excluido com sucesso"
            })
        }, err => {
            return res.status(400).json({
                error: {
                    msg: 'Error ao excluir contato'
                }
            })
        })
}

export default {
    create,
    update,
    destroy
}
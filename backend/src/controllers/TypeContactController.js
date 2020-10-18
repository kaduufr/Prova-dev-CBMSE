import db from '../db/connection'

const index = async function (req, res) {
    const data = await db('type_contact').select('*')

    if (!data) {
        return res.status(404).json({
            error: {
                msg: 'Erro na requisição'
            }
        })
    }

    return res.json(data)
}

export default {
    index
}
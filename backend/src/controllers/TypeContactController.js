import db from '../db/connection'

// url: http://localhost:3333/types
// retorna todos os dados encontrados na tabela type_contact
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
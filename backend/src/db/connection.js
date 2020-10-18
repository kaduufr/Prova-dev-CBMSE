import knex from 'knex'
import { development, staged } from '../../knexfile'

const config = process.env.NODE_ENV == 'staged' ? staged : development 

const connection = knex(config)

export default connection
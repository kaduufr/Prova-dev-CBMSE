require('dotenv').config();
import express, { json } from "express"

import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(json())
app.use(routes)

app.listen(3333)
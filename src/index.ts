
import 'reflect-metadata'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'path'
import routes from './routes/index.js'

dotenv.config()

const app = express()
const PORT = parseInt(process.env.PORT ?? '8000')
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../../client/dist')))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', routes)

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`- open: http://localhost:${PORT}`)
})

export default app

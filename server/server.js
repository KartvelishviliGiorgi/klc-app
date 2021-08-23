import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

connectDB(process.env.DB_CONNECTION)

const app = express()

app.use(cors())
app.use(express.json())


import usersRoutes from './routes/users.js'
app.use('/users', usersRoutes)

import home from './routes/home.js'
app.use('/home', home)


const server = app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))

process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error}`)
    server.close(() => process.exit(1))
})
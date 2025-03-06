const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const MongooseLogin = require('./models/Login')
app.use(express.json())
app.use(cors(
    {
        origin: ["https://lodep-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

mongoose.connect('mongodb+srv://surya_user:surya123@mern2025.rrmsu.mongodb.net/?retryWrites=true&w=majority&appName=mern2025')

app.listen(3002, () => {
    console.log(`Server running`)
})

app.get('/', (req, res) => {
    res.json("Hello")
})

app.post('/register',(req, res) => {
    MongooseLogin.create(req.body)
    .then(userList => res.json(userList))
    .catch(err => res.json(err))
})

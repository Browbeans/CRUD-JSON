import express from 'express'

const router = express.Router()

const users = [
    {
        name: "John",
        lastName: "Doe", 
        age: 25
    },
    {
        name: "Jane",
        lastName: "Doe", 
        age: 24
    },
]

router.get('/',(req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    users.push(req.body)
    res.send(users)
})

export default router;
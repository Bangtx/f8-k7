const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const port = 3000

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        salary: 1000
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        salary: 2000
    }
]

// http://localhost:3000/
app.get('/users/', (req, res) => {
    const {name} = req.query
    if (name) {
        res.send(users.filter(user => user.name.includes(name)))
        return
    }
    res.send(users)
})

app.get('/users/:id/', (req, res) => {
    const {id} = req.params
    res.send(users.find(user => user.id === Number(id)))
})

app.post('/users/', (req, res) => {
    const newUser = {...req.body, id: 4}
    users.push(newUser)
    res.send(newUser)
})

app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    const index = users.findIndex(user => user.id === Number(id))
    users.splice(index, 1)
    res.send({msg: 'user have been deleted'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

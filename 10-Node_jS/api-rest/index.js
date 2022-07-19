import express, { response } from 'express'
import { request } from 'https'

const app = express()

const PORT = 30
let users = [
    {id:1, name:'Aurelio Capingana', age:30},
    {id:2, name:'Afonso Castro ', age:35},
    {id:3, name:'Albertina Tchapuaquisso', age:32}
]

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com o servidor Express.</h1>')
})

app.get('/users', (request, response) => {
    return response.send(users)
})//get statu 200 
app.get('/useres/:userId', (request, response) => {
    const userId = request.parems.userId
    const user = users.find(user => {
        return (user.Id === Number(userId))
    })// o find como se fosse um filter só que ele retorna o primeiro que encontrar
    return response.send(user)
})

app.post('/users', (request, response) => {
   const newUser = request.body

   users.push(newUser)

   return response.status(201).send(newUser)
})
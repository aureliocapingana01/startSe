import express, { response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express()

const PORT = 30
let users = [
    {id:1, name:'Aurelio Capingana', age:30},
    {id:2, name:'Afonso Castro ', age:35},
    {id:3, name:'Albertina Tchapuaquisso', age:32}
]

app.use(express.json());//para difinir que todos os obj seram no firmato json

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com o servidor Express.</h1>')
})

app.get('/users', (request, response) => {
    return response.send(users)
})//get statu 200 

app.get('/users/:userId', (request, response) => {
    const userId = request.parems.userId
    const user = users.find(user => {
        return (user.id === Number(userId))
    })// o find como se fosse um filter só que ele retorna o primeiro que encontrar
    return response.send(user)
})

app.post('/users', (request, response) => {
   const newUser = request.body

   users.push(newUser)

   return response.status(StatusCodes.CREATED).send(newUser)
})


//Metodo para mudificar, fazer update

app.put('/users/:userId', (request, response) => {
    const userId = request.params.userId
    const updatedUser = request.body

    users = users.map(user => {
        if(Number(userId) === user.id) return updatedUser

        return user
    })

    return response.send(updatedUser)
})

app.delete('/users/:userId', (request, response) => {
    const userId = request.params.userId
    
    users = users.filter((user) => user.id !== Number(userId))

    return response.status(StatusCodes.NO_CONTENT)
})
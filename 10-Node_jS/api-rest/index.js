import express from 'express'

const app = express()
const PORT = 30

app.listen(PORT, () => {
    console.log(`Servidor rodando em http//localhost:${PORT}`)
})
app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com o servidor Express.</h1>')
})
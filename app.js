// Usando objeto express
const express = require('express')
const { get } = require('express/lib/response')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Routes
// Methods HTTP (GET, POST, PUT, DELETE)
app.get('/v1/explorers', (req, res)=>{
    console.log(`GET explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: 'Sara'}
    const explorer2 = {id: 2, name: 'Sara'}
    const explorers =[explorer1, explorer2]
    // HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})


app.get('/v1/explorers/:id', (req, res)=>{
    console.log(`GET BY ID explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: 'Sara'}   
    // HTTP CODE STATUS: 200
    res.status(200).json(explorer1)
})

app.post('/v1/explorers', (req, res)=>{
    console.log(`POST explorers V1 API ${new Date()}`)
    // Agregar la lógica para persistir
    console.log(req.body)
    res.status(201).json({message: "Creado con éxito"})
})


app.put('/v1/explorers/:id', (req, res)=>{
    console.log(`PUT explorers V1 API ${new Date()}`)
    // Agregar la lógica para actualizar
    console.log(req.body)
    console.log(req.params.id) // query params
    res.status(201).json({message: "Actualizado con éxito"})
})

app.delete('/v1/explorers/:id', (req, res)=>{
    console.log(`DELETE explorers V1 API ${new Date()}`)
     // Agregar la lógica para eliminar el registro enviado
    res.status(200).json({message: "Eliminado con éxito"})
})


// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
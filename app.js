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


// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
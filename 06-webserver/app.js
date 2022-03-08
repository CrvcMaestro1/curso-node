const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)

// servir contenido estático
// app.use(express.static('public'))

app.use(express.static('www'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Christian Vera',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Christian Vera',
        titulo: 'Generic'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Christian Vera',
        titulo: 'Elements'
    })
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo ruta')
})

app.get('*', (req, res) => {
    res.status(404);
    res.sendFile(`${__dirname}/public/404.html`)
})

app.listen(port, () => {
    console.log(`Webserver listening at http://localhost:${port}`)
})
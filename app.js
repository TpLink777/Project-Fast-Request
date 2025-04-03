const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars');
const morgan = require('morgan')
const  cors = require('cors')
const indexRoutes = require('./routes/index')
const envioDeEmail = require('./routes/contacto.routes')


// Cargar variables de entorno desde .env
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 3000
app.use(morgan('dev'));
app.use(express.json())
app.use(cors())



// Configurar Handlebars
app.engine('hbs', engine({ 
    extname: '.hbs', 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))


// Usar rutas correctamente
app.use('/', indexRoutes)
app.use('/contactanos', envioDeEmail)

// Iniciar servidor
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`)
})

// Create an app
var server = require('diet')
var moment = require('moment-timezone')
var app = server()
app.listen('http://0.0.0.0:1337')

// When http://localhost:8000/ is requested, respond with "Hello World!"
app.get('/', function($){
    $.json({message: {"en": "Hello World!", "es": "¡Hola Mundos!", "fr": "Salut le monde!", "de": "Hallo Welt!", "ar": "مرحبا بالعالم", "fa": "سلام دنیا", "ru": "Привет мир"}, timestamp: moment.tz('Asia/Kolkata').format("DD-MMM-YYYY HH:mm:ss ZZ")})
})
const Telegraf = require('telegraf')
require('dotenv').config()

const arrayChistes = [{
        "pregunta": "¿Por que los de lepe tiran a los niños al pozo?",
        "respuesta": "Porque en el fondo son buenos"
    }, {
        "pregunta": "¿Por qué los del epe no entran a la cocina?",
        "respuesta": "Porque hay un bote que pone sal"
    }, {
        "pregunta": "¿Por qué los de lepe ponen un condón en la ventana?",
        "respuesta": "Para que no entre polvo"
    }, {
        "pregunta": "¿Por qué los del lepe no salen de la comunidad?",
        "respuesta": "Porque hay un cartel que pone Huelva"
    }, {
        "pregunta": "¿Para qué los del epe ponen la tele al revés?",
        "respuesta": "Para verle las bragas a la presentadora"
    }, {
        "pregunta": "¿Para que los de lepe ponen cinco televisiones?",
        "respuesta": "Para ver tele cinco"
    }, {
        "pregunta": "¿Para que los del epe ponen tres antenas en la televisión?",
        "respuesta": "Para ver antena tres"
    }, {
        "pregunta": "¿Porque las mujeres de lepe beben agua del mar?",
        "respuesta": "Para ser mas resaladas"
    }, {
        "pregunta": "Sabes porque los de lepe plantan los naranjos de 3 en 3?",
        "respuesta": "Para hacer tri-naranjus"
    }, {
        "pregunta": "Sabes porque los de lepe llevan una bañera encima de la ambulancia?",
        "respuesta": "Para llevar la sirena"
    }, {
        "pregunta": "Sabes porque los de lepe se tiran un pedo antes de salir de casa?",
        "respuesta": "Para echar el pestillo"
    }, {
        "pregunta": "¿Por qué los de lepe ponen un policía a correr?",
        "respuesta": "Para hacer un poli-deportivo"
    }, {
        "pregunta": "¿Por qué los del epe se pusieron de moda?",
        "respuesta": "Porque Jaimito se fue de vacaciones"
    }, {
        "pregunta": "¿Por que los de lepe ponen cebollas en la carretera?",
        "respuesta": "Por que son buenas para la circulación"
    }, {
        "pregunta": "Sabes porque los de lepe ponen una tortuga encima de la televisión?",
        "respuesta": "Para que vaia en camara lenta "
    }, {
        "pregunta": "Sabes porque los de lepe ponen ponen la television en el congelador?",
        "respuesta": "Para congelar la imagen "
    }, {
        "pregunta": "Sabes porque los de lepe ponen una pera encima de la television al lado de la antena? ",
        "respuesta": "Para tener una antena perabólica (Beatriz Torres)"
    },
    {
        "pregunta": "¿Cómo se puede identificar a uno de Lepe en un submarino?",
        "respuesta": "Es el que lleva el paracaídas puesto."
    }, {
        "pregunta": "¿Sabes por qué los de Lepe usan todos boina en invierno?",
        "respuesta": "Porque es funda - mental "
    }, {
        "pregunta": "¿Qué dice un letrero enorme situado en el aeropuerto de Lepe?",
        "respuesta": "¡No tiren migas, bajan solos!"
    }, {
        "pregunta": "¿Por qué los de Lepe cada vez que compran una caja de leche la abren en el mismo supermercado?",
        "respuesta": "Porque en el envase dice: “Abra aquí”."
    }, {
        "pregunta": "¿Sabías por qué los de Lepe ponen cebollas en la carretera?",
        "respuesta": "Porque son buenas para la circulación."
    }, {
        "pregunta": "¿Qué hace un lepero con un sobre de ketchup en la oreja?",
        "respuesta": "Esta escuchando salsa"
    }, {
        "pregunta": "¿Por qué los de Lepe se tiran a un pozo?",
        "respuesta": "Porque en el fondo no son tan tontos."
    },
]
arrayPregunta = []
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Para recibir un chiste de la excelentisima ciudad de Lepe, envie el comando /lepe`))
bot.help((ctx) => ctx.reply(`Para recibir un chiste de la excelentisima ciudad de Lepe, envie el comando /lepe`))

bot.command('lepe', (ctx) => {
    const num = arrayChistes[Math.floor(Math.random() * arrayChistes.length)]
    ctx.reply(num.pregunta)
    setTimeout(x => {
        ctx.reply(num.respuesta)
    }, 5000)
})
bot.launch()

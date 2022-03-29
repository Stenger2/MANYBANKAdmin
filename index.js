const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const cardsRoutes = require('./routes/bank')
const { extname } = require('path/posix')

const PORT = process.env.PORT || 8080

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'cards_main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))

app.use(cardsRoutes)
app.use(express.static(path.join(__dirname, 'public')))

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://Vova:ManyukVova2002@cluster0.wqh6t.mongodb.net/cards',
            {
                useNewUrlParser: true,
                retryWrites: true,
                w: "majority",
            }
        )
        app.listen(PORT, () => {
            console.log('server started')
        })
    }
    catch (e) {
        console.log(e)
    }
}

start()

const express = require('express')
const app = express()
const routes = require('./routes')

// files static in folder public
app.use(express.static("public"))

// config express to use ejs
app.set('view engine', 'ejs')

// using routes
app.use(routes)

app.listen(3000, () => {
    console.log('Server running on port 3000 ...')
})



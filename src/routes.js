const express = require('express')
const routes = express.Router()

const basePath = __dirname + '/views/' 

const profile = {
    name: "Renan Lima",
    avatar: "https://avatars.githubusercontent.com/u/25689979?v=4"
}

// os arquivos estão sem extensão pq estu usando EJS
routes.get('/', (req, res) =>  res.render(basePath + 'index'))
routes.get('/job', (req, res) =>  res.render(basePath + 'job'))
routes.get('/job/edit', (req, res) =>  res.render(basePath + 'job-edit'))
routes.get('/profile', (req, res) =>  res.render(basePath + 'profile', { profile } ))


module.exports = routes
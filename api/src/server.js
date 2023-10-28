const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.time(req.ip+"#"+req.method+"@"+req.originalUrl)
    next()
    console.timeEnd(req.ip+"#"+req.method+"@"+req.originalUrl)
})

app.use("*", (req, res) => {
    res.status(404).send(`
        <h1>404</h1>
        <h2>${req.originalUrl} em ${req.method} não existe</h2>
    `)
})

app.listen(3028, () => {
    console.log("Servidor iniciado na porta 3028")
})

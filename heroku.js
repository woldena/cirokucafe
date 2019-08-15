var express = require('express')
var app = express()
var path = require('path')
const port = process.env.PORT

// app.get("static/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "static", req.params[1]))
// })
//
app.get("/", (req, res) => {
    console.log(`route  ${req.path}`)
    var p = req.params[1];
    console.warn(p)
    if (p) {
        res.sendFile(path.resolve(__dirname,"build", p))
    } else {
        res.sendFile(path.resolve(__dirname,"build", "index.html"))
    }
})

app.get("/*", (req, res) => {
    console.log(`route  ${req.path}`)
    var p = req.params[0];
    if (p) {
        res.sendFile(path.resolve(__dirname,"build", p))
    }
})

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`)
})

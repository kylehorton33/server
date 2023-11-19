const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ debug: "Kyle's Personal API -  2023.11.19" })
})

app.get('/echo', (req, res) => {
    res.json({ content: req.headers})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
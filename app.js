const express = require('express')
const app = express()

app.get('/names', (req, res) => {
    res.send("James");
})

app.listen(500, () => {
    console.log("Server is running on port 5000");
})
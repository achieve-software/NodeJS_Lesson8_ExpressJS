const express = require("express");
const app = express();

require("dotenv").config();

const HOST = process.env.HOST || '127.0.0.1'
const PORT =process.env.PORT || 8000 

app.get('/', (request, response) => {

response.send("welcome to express")

})


app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`))
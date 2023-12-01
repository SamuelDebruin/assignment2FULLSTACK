//imports and definations
const express = require("express")
const server = express();
const {request, response} = require("http")
const cors = require("cors")
const mongoose = require("mongoose")
const Product = require("./models/product")
const port = 3000;
const db_uri = "mongodb+srv://sam:samuel@cluster0.csssvaw.mongodb.net/?retryWrites=true&w=majority"

//Middleware
server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(cors())

//conections
mongoose.connect(db_uri).then((result) => {
    server.listen(port, () => {
        console.log(`Listening on ${port}...\nConnected to DB`)
    });
}).catch((error) => {
    console.log(error);
});

//routes
server.get("/", (request, response) => {
    response.send("LIVE!!!");
});

server.get("/products", async (request, response) => {
    const products = await Product.find();
    response.send(products);
})

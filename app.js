const express = require('express')
const app = express();
const port = 3000;

const path = require('path')
const productsRouter = require('./src/router/productsRouter')

app.use(express.static(path.join(__dirname,'/public/')))

app.set("views","./src/views")
app.set("view engine","ejs")



app.use("/products", productsRouter)

app.get('/',(req,res) => {
    res.render('index',{username: 'tanapumin'})
})
app.listen(3000, () => {
    console.log('Running on port 3000');
})
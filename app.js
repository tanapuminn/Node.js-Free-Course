const express = require('express')
const app = express();
const port = 3000;

const path = require('path')
const productRouter = express.Router()
const products = require('./data/products.json')

app.use(express.static(path.join(__dirname,'/public/')))

app.set("views","./src/views")
app.set("view engine","ejs")

productRouter.route('/').get((req,res)=> {
    res.render('products',
        products,
    )
})

productRouter.route('/1').get((req,res)=> {
    res.send("This product 1!!")
})

app.use("/products", productRouter)

app.get('/',(req,res) => {
    res.render('index',{username: 'tanapumin'})
})
app.listen(3000, () => {
    console.log('Running on port 3000');
})
const express = require('express')
const app = express();
const port = 3000;

const path = require('path')
const productRouter = express.Router()

app.use(express.static(path.join(__dirname,'/public/')))

app.set("views","./src/views")
app.set("view engine","ejs")

productRouter.route('/').get((req,res)=> {
    res.render('products',{
        products: [
            {tTitle: 'น้ำยาล้างจาน', Description: 'น้ำยาล้างจานสูตร 1 ขจัดคราบ', Price: 45},
            {tTitle: 'น้ำยาล้างจาน 2', Description: 'น้ำยาล้างจานสูตร 2 ล้างมัน', Price: 30},
            {tTitle: 'น้ำยาล้างจาน 3', Description: 'น้ำยาล้างจานสูตร 3 หอมใส', Price: 50},
            {tTitle: 'น้ำยาล้างจาน 4', Description: 'น้ำยาล้างจานสูตร 4  มันวาว', Price: 55},
        ]
    })
})

productRouter.route('/1').get((req,res)=> {
    res.send("This product 1!!")
})

app.use('/products', productRouter)

app.get('/',(req,res) => {
    res.render('index',{username: 'tanapumin'})
})
app.listen(3000, () => {
    console.log('Running on port 3000');
})
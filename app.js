const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const port = process.env.PORT || 7800;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = process.env.LiveMongo;
const bodyParser = require('body-parser')
let db;


// middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello from Express')
})

// List of Products wrt to category_id 
app.get('/products', (req,res)=>{
    let categoryId = Number(req.query.categoryId)
    let query = {}
    if(categoryId){
        query = {category_id:categoryId}
    } else {
        query = {}
    }
    db.collection('product').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
//update product
app.put('/updateProduct/:id', (req, res) => {
    let pid = Number(req.params.id);
    db.collection('product').updateOne(
        {product_id:pid},
        {
            $set:{
                "product_name":req.body.product_name,
                "qtyPerUnit":req.body.qty_per_unit,
                "unitPrice":req.body.unit_price,
                "unitInStock":req.body.unit_in_stock,
                "discontinued":req.body.discontinued
            }
        }, (err, result) => {
            if (err) throw err;
            res.send('Product Updated')
        }
    )
})
// create product
app.post('/addProducts', (req,res) => {
    db.collection('product').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Product Added')
    })
})

// delete one record of the product by its ID
app.delete('/deleteProduct/:id', (req, res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('product').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Product Removed')
    })
})

//List of all category
app.get('/categories', (req,res)=>{
    db.collection('category').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// create category
app.post('/addCategories', (req,res) => {
    db.collection('category').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Category Added')
    })
})

// delete one record of the category by its ID
app.delete('/deleteCategory/:id', (req, res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('category').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Category Removed')
    })
})

//connection with database
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log('Error while connecting');
    db = client.db('solulab-restapi');
    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`)
    })
})

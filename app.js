const express = require('express');
const app = express();

const port = 7800;

app.get('/', (req, res) => {
    res.send('Hello from express')
})

app.get('/product', (req,res)=>{
    res.send('This is from Product')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
const express = require('express');
const path = require('path');
const app = express();
const db = require('./db')


app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req, res, next)=> {
    try{
    res.sendFile(path.join(__dirname, 'products.json'))
    }
    catch(ex){
        next(ex);
    }
});

app.listen(3000, ()=> console.log('listening on port 3000'));
const express = require('express');
const path = require('path');
const app = express();
const db = require('./db')
const dataLayer = db('./products.json')


app.use(express.json());

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
app.post('/api/products', async (req, res, next)=> {
    try{
        res.send(await dataLayer.create(req.body))
    }
    catch(ex){
        next(ex);
    }
})


app.listen(3000, ()=> console.log('listening on port 3000'));
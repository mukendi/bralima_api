const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('../backend/config/connexionDB');

const userRouter = require('./router/user');
const depotonwerRouter = require('./router/depotOnwer');
const productRouter    = require('./router/product');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 
connectDB();

app.use(bodyParser.json()); 
app.use('/api/v1/user',userRouter);
app.use('/api/v1/product',productRouter);
//app.use('/api/v1/',depotonwerRouter);
module.exports = app;
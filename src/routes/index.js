const express =require('express');

const v1Router =require('./v1');


const apiRouter = express.Router();

v1Router.use('/v1',v1Router);

module.exports= apiRouter;
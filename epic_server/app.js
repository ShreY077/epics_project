const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./router/router')
const connect = require('./library/db/connect');
const sess = require('./session/session');
const passport = require('passport');
const local = require('./library/passport/passport');


//constants and initilizations 
const app = express();
const PORT = process.env.PORT || 3300;
const URI = process.env.URI;

//DB connection
connect(URI)

//cross origin access

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  
//middlewares

app.use(express.json())
app.use(sess)
app.use(passport.initialize());
app.use(passport.session());


//router
app.use(router);


app.listen(PORT,()=>console.log(`Running on port ${PORT}`))
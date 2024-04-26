const session = require('express-session');
const cM = require('connect-mongo');
require('dotenv').config()

const SECRET = process.env.SECRET
const URI = process.env.URI

const sessionStore  = new cM(
    {
        mongoUrl : URI,
        collectionName : 'sessions'
    })

const sess = session({
secret:SECRET,
resave:true,
saveUninitialized:false,
cookie:{
  maxAge:1000*60*60
},
store:sessionStore
})

module.exports = sess;
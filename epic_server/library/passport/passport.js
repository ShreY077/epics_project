const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const verifyPassword = require("../passport/hashSaltGen").verifyPassword
const User = require('../model/user');


const verifyedCallBack = async(username,password,done)=>{
  try{
      const user = await User.findOne({userName:username});
      if (!user) return done(null, false);
      if (!verifyPassword(password,user.salt,user.hash)) return done(null, false);
      console.log("login success");
      return done(null, user);
    }
    catch(err){
      console.log('error in passport')
    } 
}

const strategy = new LocalStrategy(verifyedCallBack);
passport.use(strategy);




passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(error => {
      done(error, null);
    });
});

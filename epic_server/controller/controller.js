const hashSaltGen = require('../library/passport/hashSaltGen').hashSaltGen
const User = require('../library/model/user');
const passport = require('passport');


const register = async(req,res)=>{
    var success = false
    try {
        const user = req.body
        const hS = hashSaltGen(user.pass)
        const newUser = {
            userName : user.name,
            hash:hS.hash,
            salt:hS.salt,
            emailId : user.email
        }
        await User.create(newUser);
        success = true
        console.log("register router used and reg success" );
    } 
    catch (error) {
        console.log("register router used and reg failed" );
        console.log(error)
    }
    res.status(200).json({msg:`Registeration success : ${success}`})
}

const local = passport.authenticate('local');

const login =(req,res)=>{
  console.log("login responce sent");
  let user = req.user.userName
  req.session.user = user;
  req.session.isUser = true;
  console.log(req.session);
  res.status(200).json({name:user,userId:req.session.passport.user,isUser : req.session.isUser})
}




const logout = (req, res)=> {
    console.log('used Logout')
    req.session.isAuth = false;
    req.logout(function(err) {
      if (err) {
        console.error(err);
        return res.status(500).send('Error logging out');
      }
      res.status(200).json({
        msg:'Logged out successfully'
      });
    });
  }


  const isUser = async(req,res)=>{
    console.log(req.session)
    console.log(req.session.isUser)
    if(req.session.isUser) 
    {
        res.json({
            isUser:true,
            user:req.session.user
        });
        return;
    }
    res.send(false);
  }





module.exports = {register,login,logout,local,isUser}
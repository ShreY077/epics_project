const express  = require('express');
const passport = require('passport');
const controller = require('../controller/controller');

const router = express.Router();


router.route('/v1/login').post(controller.local,controller.login);


router.route('/v1/register').post(controller.register);

router.route('/v1/isUser').get((req,res)=>{
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
})

router.route('/v1/logout').get(controller.logout);



module.exports = router
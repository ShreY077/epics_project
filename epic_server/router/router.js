const express  = require('express');
const passport = require('passport');
const controller = require('../controller/controller');

const router = express.Router();


router.route('/v1/login').post(controller.local,controller.login);


router.route('/v1/register').post(controller.register);


router.route('/v1/isUser').get(controller.isUser)

router.route('/v1/logout').get(controller.logout);

router.route('/v1/history').post(controller.history).get(controller.historyFetch)



router.route('/v1/ref').get((req,res)=>{
    if(req.session.isUser) 
    {
        let user = {
            isUser:req.session.isUser,
            name:req.session.user
        }
        res.json({
            user:user
        });
    }
else
res.send("hiii");
})


module.exports = router
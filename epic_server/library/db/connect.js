const mongoose = require('mongoose');

const connect = async(uri)=>{
    try{
        await mongoose.connect(uri);
        console.log('connected to DB');
    }catch(err)
    {
        console.log('DB connection error')
    }
}

module.exports = connect

const crypto = require('crypto');

const hashSaltGen = (pwd)=>{
    const salt = crypto.randomBytes(32).toString('hex')
    const hash = crypto.pbkdf2Sync(pwd,salt,10000,64,'sha512').toString('hex')

    return{
        salt : salt,
        hash : hash
    }
}

const verifyPassword = (password,salt,hash)=>
{
    const verifyHash = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex');
    return hash === verifyHash;
}

module.exports = {hashSaltGen,verifyPassword}
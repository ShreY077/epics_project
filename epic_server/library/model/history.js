const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    id : 
    {
        type:String,
        require:true
    },
    hand : 
    {
        type:String,
        require:true
    },
    gesture : 
    {
        type:String,
        require:true
    },

    time: {
        type: Date,
        default: Date.now
    }
})

const HistoryS = mongoose.model('History',historySchema)

module.exports = HistoryS;
const mongoose = require('mongoose')

const LaunchesScherma = new mongoose.Schema({
    flightNumber: Number,
    launchDate: Date,
    mission: String,
    rocket: String,
    target: String,
    customers: [String],
    upcoming:{
        type: Boolean,
        required: true
    },
    success:{
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Launch', LaunchesScherma);
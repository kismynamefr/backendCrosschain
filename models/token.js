const mongoose = require("mongoose")

const TokenSchema = mongoose.Schema({
    token: {
        type: String
    },
    address: {
        type: String
    },
    network: {
        type: String
    },
    chainid: {
        type: String
    }
}, {
    timestamps: true,
    collection: "token"
})

module.exports = mongoose.model("Token", TokenSchema)
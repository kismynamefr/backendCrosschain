const mongoose = require("mongoose")

const TokenSchema = mongoose.Schema({
    token_name: {
        type: String
    },
    address: {
        type: String
    },
    network: {
        type: String
    }
}, {
    timestamps: true,
    collection: "token"
})

module.exports = mongoose.model("Token", TokenSchema)
const mongoose = require("mongoose")

const TokenSchema = mongoose.Schema({
    token1: {
        type: String
    },
    chainid1: {
        type: String
    },
    token2: {
        type: String
    },
    chainid2: {
        type: String
    }
}, {
    timestamps: true,
    collection: "pair"
})

module.exports = mongoose.model("Pair", TokenSchema)
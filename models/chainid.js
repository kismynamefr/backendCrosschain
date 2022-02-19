const mongoose = require("mongoose")

const ChainSchema = mongoose.Schema({
    chainid: {
        type: String
    },
    network: {
        type: String
    }
}, {
    timestamps: true,
    collection: "chainid"
})

module.exports = mongoose.model("Chainid", ChainSchema)
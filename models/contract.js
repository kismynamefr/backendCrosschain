const mongoose = require("mongoose")

const ContractSchema = mongoose.Schema({
    address: {
        type: String
    },
    chainid: {
        type: String
    }
}, {
    timestamps: true,
    collection: "contract"
})

module.exports = mongoose.model("Contract", ContractSchema)
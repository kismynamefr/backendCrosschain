const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    address: {
        type: String
    },
    network: {
        type: String
    }
}, {
    timestamps: true,
    collection: "User"
})

module.exports = mongoose.model("User", UserSchema)
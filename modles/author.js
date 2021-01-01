const mongoose = require('mongoose');//importing mongoose
const AuthorSchema = new mongoose.Schema({//adding authorSchema to the database
    name: {
        type: String,                     //adding name data to the database
        required: true
    }
})

module.exports = mongoose.model('authors' , AuthorSchema)//exporting the authorschema 
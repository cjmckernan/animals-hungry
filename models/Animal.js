const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'Name cannot be more than 40 characters']
    },
    numberOfMeals: {
        type: Number,
        required: true
    },
    currentMeal: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.models.Animal || mongoose.model('Animal', AnimalSchema)
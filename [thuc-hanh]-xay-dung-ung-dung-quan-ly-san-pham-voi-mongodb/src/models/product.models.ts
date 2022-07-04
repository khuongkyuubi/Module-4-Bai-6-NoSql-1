import mongoose, {Schema, model} from "mongoose";


// title: {type: String, required: true, maxlength: 1000, minlength: 1},
// content: {type: String, require: true, maxlength: 5000, minlength: 1},
// date: {type: Date, default: Date.now()}
const productSchema = new Schema({
    name: {type: String, required: true, maxlength: 1000, minlength: 1},
    price: {type: Number, required: true},
    producer: {type: String, required: true},
    avatar: {type: String, required: true}
})

const productModel = mongoose.model('Product', productSchema)
export {productModel};
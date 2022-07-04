import  {Schema, model} from "mongoose";


// title: {type: String, required: true, maxlength: 1000, minlength: 1},
// content: {type: String, require: true, maxlength: 5000, minlength: 1},
// date: {type: Date, default: Date.now()}
const addressSchema = new Schema({
    name: {type: String, required: true, maxlength: 1000, minlength: 1},
    phone: {type: Number, required: true, maxlength: 13, minlength:9}
})

const addressModel = model('address', addressSchema)
export {addressModel};
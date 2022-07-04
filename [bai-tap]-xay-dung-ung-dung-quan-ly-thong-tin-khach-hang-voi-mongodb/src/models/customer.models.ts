import {Schema, model} from "mongoose";
import shortid from "shortid";

const customerSchema = new Schema({
    fullName: {type: String, required: true, maxlength: 1000, minlength: 1},
    customerID: {type: String, require: true,default: shortid.generate()},
    email: {type: String, require: true, maxlength: 5000, minlength: 1},
    phone: {type: Number, require: true, maxlength: 5000, minlength: 1}
});

const customerModel = model("customer", customerSchema)

export {customerModel};
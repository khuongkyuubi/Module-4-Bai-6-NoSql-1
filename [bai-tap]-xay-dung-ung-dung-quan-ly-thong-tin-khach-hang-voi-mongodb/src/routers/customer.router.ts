import {Router} from "express";

const router = Router();
import {bookModel} from "../models/book.models";
import {customerModel} from "../models/customer.models";
import multer from "multer";

const upload = multer();
export default router;


//[GET] get trang create
router.get("/create", (req, res, next) => {
    res.render("createCustomer");
    next();
});

// [POST] create new customer
router.post("/create", upload.none(), async (req, res, next) => {
    try {
        console.log(req.body)
        const newCustomer = new customerModel(req.body);
        const customer = await newCustomer.save();
        if (customer) {
            res.render("success");
        } else {
            console.log(customer)
            res.render("error");
        }

    } catch (err) {
        console.log(err.message)
        res.render("error");

    }

})

// [GET] get list

router.get("/list", async (req, res, next) => {
    try {
        const customers = await customerModel.find();
        res.render("listCustomer", {customers});
    } catch (err) {
        res.render("error");
    }
})

// [Get update by id]

router.get("/update/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const customer = await customerModel.findOne({_id: id})
        if (customer) {
            res.render("updateCustomer", {customer})
        } else {
            res.render("error");
        }

    } catch (e) {
        res.render("error");
    }
})

//[POST] update customer

router.post("/update/:id", upload.none(), async (req, res, next) => {
    try {
        // console.log(req.params.id)
        // const newCustomer = await customerModel.findOne({_id: req.params.id});
        const customer = await customerModel.findOneAndUpdate({_id: req.params.id}, req.body);
        if (customer) {
            res.render("success")
        } else {
            res.render("error");

        }
    } catch (e) {
        res.render("error");
    }
})

// [DELETE ] by id

router.delete("/delete/:id", async (req, res, next) => {
    try {
        const deleteCustomer = await customerModel.findByIdAndRemove({_id: req.params.id});
        res.status(200).json({message: "success"})
    } catch (e) {
        res.render("error");
    }

})

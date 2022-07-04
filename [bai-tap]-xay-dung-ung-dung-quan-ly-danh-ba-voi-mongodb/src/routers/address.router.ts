import {Router} from 'express';

const addressRoutes = Router();

import {addressModel} from "../models/address.models";

import multer from 'multer';

const upload = multer();


addressRoutes.get('/create', (req, res) => {

    res.render("createAddress");

});


addressRoutes.post('/create', upload.none(), async (req, res) => {

    try {

        const productNew = new addressModel(req.body);

        const product = await productNew.save();

        if (product) {

            res.render("success");

        } else {

            res.render("error");

        }

    } catch (err) {

        res.render("error");

    }

});


addressRoutes.get('/list', async (req, res) => {
    try {
        let limit: number;
        let offset: number;
        if (!req.query.limit || !req.query.offset) {
            limit = 3;
            offset = 0
        } else {
            limit = parseInt(req.query.limit as string);
            offset = parseInt(req.query.offset as string)
        }
        const addressBook = await addressModel.find().limit(limit).skip(limit * offset);
        res.render("listAddress", {addressBook: addressBook})
    } catch {
        res.render("error")
    }
});


export default addressRoutes;






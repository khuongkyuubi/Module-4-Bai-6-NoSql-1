
import { Router } from 'express';

const productRoutes = Router();

import { productModel } from "../models/product.models";

import multer from 'multer';

const upload = multer();



productRoutes.get('/create', (req, res) => {

    res.render("createProduct");

});



productRoutes.post('/create', upload.none(), async (req, res) => {

    try {

        const productNew = new productModel(req.body);

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



productRoutes.get('/list', async (req, res) => {

    try {

        const products = await productModel.find();

        res.render("listProduct", { products: products });

    } catch {

        res.render("error");

    }

});



export default productRoutes;






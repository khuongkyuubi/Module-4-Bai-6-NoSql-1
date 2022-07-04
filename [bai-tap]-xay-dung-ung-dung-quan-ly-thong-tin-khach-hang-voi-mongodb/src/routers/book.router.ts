import {Router} from "express";

const router = Router();
import {bookModel} from "../models/book.models";
import multer from "multer";

const upload = multer();
export default router;


//[GET] get trang create
router.get("/create", (req, res, next) => {
    res.render("createBook");
    next();
});

//[POST] create new book
router.post("/create", upload.none(), async (req, res, next) => {
    try {
        console.log(req.body)
        const newBook = new bookModel(req.body);
        const book = await newBook.save();
        if (book) {
            res.render("success");
        } else {
            res.render("error");
        }

    } catch (err) {
        res.render("error");
    }
});

// update
router.post("/update", upload.none(), async (req, res, next) => {
    try {
        const book = await bookModel.findOne({_id: req.body.id});
        book.tittle = req.body.tittle;
        book.description = req.body.description;
        book.author = req.body.author;
        await book.save();
        if (book) {
            res.render("success");
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error")
    }
});

//get list
router.get("/list", async (req, res, next) => {
    try {
        const books = await bookModel.find();
        res.render("listBook", {books: books});
    } catch (err) {
        res.render("error")
    }
})

// post update by id
router.get("/update:id", async (req, res, next) => {
    try {
        const book = await bookModel.findOne({_id: req.params.id})
        console.log(book, "book");
    } catch (err) {
        res.render("error")
    }
});

// post delete by id
router.delete("/delete/:id", async (req, res, next) => {
    try {
        const book = await bookModel.findOne({_id: req.params.id});
        if (book) {
            await book.remove();
            res.status(200).json({message: "success"})
        } else {
            res.render("error");
        }

    } catch (err) {
        res.render("error");
    }
});






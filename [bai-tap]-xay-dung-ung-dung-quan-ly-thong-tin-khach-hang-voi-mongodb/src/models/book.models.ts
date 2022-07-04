import {Schema, model} from "mongoose";

interface IBook {
    tittle: string;
    description: string;
    author: string;
}

const bookSchema = new Schema<IBook>({
    tittle: String,
    description: String,
    author: String
})

const bookModel = model<IBook>("Book", bookSchema);

export {bookModel};
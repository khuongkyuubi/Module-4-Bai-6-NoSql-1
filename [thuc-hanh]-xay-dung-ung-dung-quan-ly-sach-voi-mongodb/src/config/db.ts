import mongoose from "mongoose"

const DB_URI = "mongodb://localhost:27017/dbTest";
const connectDB = async function () {
    try {
        await mongoose.connect(DB_URI, {
            // @ts-ignore
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connect db ok!");
    } catch (err) {
        console.log(err);
        console.log("connect failure");

    }
}

export default connectDB;
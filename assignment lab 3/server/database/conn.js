import mongoose from "mongoose";
const URI = "mongodb+srv://sample:sample@cluster0.5ojtmyt.mongodb.net/easyBooking"

mongoose.set('strictQuery', true);
async function connect(){

    const db = await mongoose.connect(URI)
    console.log(" database Connected ")
    return db
}

export default connect
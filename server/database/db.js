import mongoose from "mongoose";

const Connection =async (USERNAME,PASSWORD) => {
    const URL =
      `mongodb+srv://iblog:blogpassword@cluster0.32apglg.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while connecting'+error)
    }
}
export default Connection

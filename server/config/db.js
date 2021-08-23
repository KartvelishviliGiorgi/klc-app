import mongoose from 'mongoose'

const connectDB = async(MONGO_URI) =>{
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

    console.log('Connected to database.')
}

export default connectDB

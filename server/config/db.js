import { connect } from 'mongoose';


const connectDB = async()=>{
    try {
    
        const conn = await connect("mongodb://grcy:gmartg@149.28.61.113:27017/gmart",{useUnifiedTopology:true , useNewUrlParser:true})
        console.log('MongoDB connected')
    } catch (error) {
        console.error(`Error:${error.message}`)
        process.exit(1)   
    }
}

export default connectDB
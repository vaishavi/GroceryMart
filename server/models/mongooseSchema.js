import mongoose from "mongoose";


const target = mongoose.Schema({
  //id: String,
  title: String,
  price: Number,
  image: String,
  company: String,
  search: String,
    
});

const Target = mongoose.model('target', target)
export default Target
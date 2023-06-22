import mongoose from "mongoose";


const harris = mongoose.Schema({
  //id: String,
  title: String,
  price: Number,
  image: String,
  company: String,
  search: String,
    
});

const Harris = mongoose.model('harristeeter', harris)
export default Harris
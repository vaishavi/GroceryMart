import mongoose from "mongoose";


const walmart = mongoose.Schema({
  //id: String,
  title: String,
  price: Number,
  img: String,
  company: String,
  search: String,
    
});

const Walmart = mongoose.model('walmart', walmart)
export default Walmart
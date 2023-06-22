import express from 'express';
import { model } from 'mongoose'; 
import cors from 'cors';
import { readFile } from 'fs/promises';
import pkg from 'body-parser';
import connectDB from './config/db.js';
import Target from './models/mongooseSchema.js'
import Harris from './models/HarrisSchema.js'
import Walmart from './models/walmartSchema.js'
const { urlencoded,json } = pkg;
var grocerymart = []

var jsonData=[]
 const readf= async() => {
  try {
    const data = await readFile('./data.json', 'utf8');
    jsonData = JSON.parse(data);
   
  } catch (err) {
    console.error(err);
  }
};
readf()


const app = express();

connectDB()
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());



async function GetTarget() {
    //await Target.insertMany()
    const jsonData1 = await Target.find({}).sort('price');
    //console.log(jsonData)
    return jsonData1
}

async function GetHarris() {
  //await Target.insertMany()
  const jsonData = await Harris.find({}).sort('price');

  return jsonData
}

async function GetWalmart() {
  //await Target.insertMany()
  const jsonData1 = await Walmart.find({}).sort('price');

  return jsonData1
}


// Connect to MongoDB
// mongoose.connect('mongodb://localhost/groceries', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


const groceryArray = []


app.post('/api/groceries', (req, res) => {
    const groceryItem = req.body;
    groceryArray.push(groceryItem);
    res.status(200).send({ groceryArray });
});


const grocerylist = []
const favouritesList = []


app.post('/api/filter-groceries', async (req, res) => {
    const a = await GetTarget() 
    
    
    const searchterm = req.body.searchterm
   // console.log(a)
    
    const filteredGroceries = a.filter((item) => {
        item.company = "Target"
        item.search = searchterm
     //   console.log(item.name)

        return item.title?.toLowerCase().includes(searchterm?.toLowerCase())
    })
    grocerylist.push(filteredGroceries);

    const b = await GetHarris()

    //console.log(b)
    

    const filteredGroceries1 = b.filter((item1) => {
      item1.company = "Harris Teeter"
      item1.search = searchterm
    // console.log(item1.title)

      return item1.title?.toLowerCase().includes(searchterm?.toLowerCase())
  })
  grocerylist.push(filteredGroceries1);


  const c = await GetWalmart()
  //console.log(c)
  const searchterm2 = req.body.searchterm
  const filteredGroceries2 = c.filter((item2) => {
    item2.company = "Walmart"
    item2.search = searchterm
   //console.log(item2.title)

    return item2.title?.toLowerCase().includes(searchterm2?.toLowerCase())
})
console.log(filteredGroceries2)
grocerylist.push(filteredGroceries2);



  //  console.log(grocerylist);
    res.json(grocerylist);
});



app.get('/api/filter-groceries', (req, res) => {


    res.json(grocerylist);
});

app.post('/api/favorites', (req, res) => {
    const favorites = req.body.favorites;
    console.log(favorites);
    favouritesList.push(favorites)
    res.send('Favorites added successfully');
});
app.get('/api/favourites', (req, res) => {
    res.json(favouritesList)
})



// // POST endpoint to remove a grocery item
// app.post('/api/remove-grocery', async (req, res) => {
//     const { id } = req.body;

//     try {
//         await GroceryItem.findByIdAndDelete(id);
//         const groceryItems = await GroceryItem.find();
//         res.json(groceryItems);
//     } catch (error) {
//         console.error(error);
//         res.sendStatus(500);
//     }
// });





app.listen(5003, () => {
    console.log('Server started on port 5003');
});
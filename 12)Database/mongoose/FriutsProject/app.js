const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/friutsDB", {useNewUrlParser : true,useUnifiedTopology: true })

const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "Please check your entry dummy and don't be stupid!!"]
  },
  rating:{
  type: Number,
  min: 1,
  max: 10
},
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "pis",
  rating: 10,
  review: "Pretty yummy fruit!"
});
//fruit.save();
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const People  = mongoose.model("People", peopleSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Great fruit."
// });

const mango = new Fruit({
    name: "Mango",
    score: 10,
    review:"very very juciy"
});
// mango.save();
// pineapple.save();
//
// const people = new People({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// const people = new People({
//   name:"Brighton",
//   age: 20
// });
//people.save();

//Multiple insertions

const kiwi =  new Fruit({
  name:"kiwi",
  rating: 10,
  review:" It is a very good friut"
})

const orange = new Fruit({
  name:"orange",
  rating: 5,
  review: "Too sour for me"
})

const banana = new Fruit({
  name:"banana",
  rating: 3,
  review: "Weird Stucture !!"
})

// Fruit.insertMany([kiwi,orange, banana], function(callbackError){
//   if(callbackError){
//     console.log(callbackError)
//   }else{
//     console.log("Successfully fed all the data of the fruits")
//   }
// })

Fruit.find(function(callbackError, fruits){
  if(callbackError){
    console.log(callbackError)
  }else{

    //mongoose.connection.close();

    fruits.forEach(function(fr){
    console.log(fr.name)
    })
  }
});


//update

People.updateOne({_id:"60b3281098e72c50f042569b"}, {favouriteFruit: mango}, function(callbackError){
  if(callbackError){
    console.log(callbackError)
  }else{
    console.log("Successfully updated!!")
  }
});

//Deleted
// Fruit.deleteOne({name:'Peach'} , function(callbackError){
//   if(callbackError){
//     console.log(callbackError);
//   }else{
//     console.log("It was succes!!")
//   }
// });

//deleted Multiple
// People.deleteMany({name: "Brighton"}, function(callbackError){
//   if(callbackError){
//     console.log(callbackError);
//   }else{
//     console.log("Multi Delete was a succes!!")
//   }
// });

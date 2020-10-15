'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
require('dotenv').config();
const mongoose = require('mongoose');


const input = new Input(process.argv);
console.log(input);
if(input.action){
  mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('connected');
    const notes = new Notes(input);
    notes.execute(process.argv[2], process.argv[3]).then(result => console.log(result))
   });
}
else{
  console.log(`${process.argv[2]} is not a command`);
}

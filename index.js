'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input(process.argv[2], process.argv[3]);

if(input.action){
  const notes = new Notes(process.argv[2], process.argv[3]);
  notes.execute(process.argv[2], process.argv[3]);
}
else{
  console.log(`${process.argv[2]} is not a command`);
}

'use strict';

const commandLine = require("./lib/input.js");
const execute = require("./lib/notes.js");

const verify = new commandLine(process.argv[2], process.argv[3]);
const results = verify.command(process.argv[2], process.argv[3]);

if(results !== "Was not a correct command"){
    const console = new execute(process.argv[2], process.argv[3]);
    console.execute(process.argv[2], process.argv[3]);
}
else{
    console.log(`${verify.action} is not a command`);
}

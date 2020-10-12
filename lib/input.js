'use strict';

function CommandLine(action, payload){
    this.action = action;
    this.payload = payload;
}

CommandLine.prototype.command = function(action, payload){
    if(action === "-a" || action === "-add"){
        return new CommandLine(action, payload);
    }else{
        return "Was not a correct command";
    }
};

module.exports = CommandLine;
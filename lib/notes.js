'use strict';

function CommandLine(action, payload){
    this.action = action;
    this.payload = payload;
}

CommandLine.prototype.execute = function(action, payload) {
    if(action === "-a" || action === "-add"){
        this.add(payload);
    }
};

CommandLine.prototype.add = function(payload){
    console.log(`Adding Note: ${payload}`);
};

module.exports = CommandLine;
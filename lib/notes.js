'use strict';

class Notes{
constructor(action, payload){
        this.action = action;
        this.payload = payload;
    }
    execute(action, payload) {
        if(action === "-a" || action === "--add"){
            this.add(payload);
        }
    };

    add(payload){
        console.log(`Adding Note: ${payload}`);
    };
}




module.exports = Notes;
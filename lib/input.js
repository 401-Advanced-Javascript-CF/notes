'use strict';
class Input{
constructor(action, payload){
this.action = this.isValid(action) ? action : null;
this.payload = payload;
}
isValid(action){
    if(action === "-a" || action === "--add"){
        return true;
    }else{
        return false;
    }
};
    
}


module.exports = Input;
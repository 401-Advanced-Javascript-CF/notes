'use strict';
class Input{
constructor(args){
    this.payload = args[3];
    this.category = args[4];
    this.action = this.isValid(args[2]) ? args[2] : null;

}
isValid(action){
    if(action === "-a" || action === "--add"){
        return true;
    }
    else if(action === "--list" ){
        this.category = this.payload;
        return true;
    }
    else if(action === "--delete"){
        this.id = this.payload;
        return true;
    }
    else{
        return false;
    }
};
    
}


module.exports = Input;
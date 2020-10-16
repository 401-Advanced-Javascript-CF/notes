'use strict';

class Collection{
    constructor(model){
        this.model = model;
    }
    add(payload, category){
        const note = new this.model({
            text : payload,
            category : category
        });
        return note.save();
    };
    list(category){
        if(category){
            return this.model.find({category: `${category}`});
        }else{
            return this.model.find({});
        }
    }
    delete(id){
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = Collection;
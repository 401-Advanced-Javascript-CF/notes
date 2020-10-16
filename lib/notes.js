'use strict';

// const mongoose = require('mongoose');
const NoteModel = require('../Models/model.js');
const Collection = require('../Models/collections.js');

class Notes{
constructor(args){
        this.action = args.action;
        this.payload = args.payload;
        this.category = args.category;
        this.id = args.id;
        this.Collection = new Collection(NoteModel);
    }
    execute() {
        if(this.action === "-a" || this.action === "--add"){
            return this.Collection.add(this.payload, this.category);
        }
        if(this.action === "--list"){
            return this.Collection.list(this.category);
        }
        if(this.action === "--delete"){
            return this.Collection.delete(this.id);
        }
    };

    // add(){
    //     const note = new NoteModel({
    //         text : this.payload,
    //         category : this.category
    //     });
    //     return note.save();
    // };
    // list(category){
    //     if(category){
    //         return NoteModel.find({category: `${category}`});
    //     }else{
    //         return NoteModel.find({});
    //     }
    // }
    // delete(id){
    //     return NoteModel.findByIdAndDelete(id);
    // }
}




module.exports = Notes;
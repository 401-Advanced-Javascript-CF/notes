'use strict';

const mongoose = require('mongoose');
const NoteModel = require('../Models/model.js');

class Notes{
constructor(args){
        this.action = args.action;
        this.payload = args.payload;
        this.category = args.category;
        this.id = args.id;
    }
    execute(action, payload) {
        if(action === "-a" || action === "--add"){
            return this.add(payload);
        }
        if(action === "--list"){
            return this.list(this.category);
        }
        if(action === "--delete"){
            return this.delete(this.id);
        }
    };

    add(){
        const note = new NoteModel({
            text : this.payload,
            category : this.category
        });
        return note.save();
    };
    list(category){
        if(category){
            return NoteModel.find({category: `${category}`});
        }else{
            return NoteModel.find({});
        }
    }
    delete(id){
        return NoteModel.findByIdAndDelete(id);
    }
}




module.exports = Notes;
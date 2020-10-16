'use strict';

const { expect } = require('@jest/globals');
require('@code-fellows/supergoose');
const Note = require('../lib/notes.js');


describe('Testing the collection CRUD operations', () => {
    it('should add a new note upon execution', () => {
  
      const note = new Note({ action: '--add', payload: 'get a job', category: 'cf' });
  
      return note.execute().then((result) => {
        expect(result.text).toEqual('get a job');
      });
    });
  
    it('should GET the item added into the DB', () => {
  
        const note = new Note({ action: '--list'});
    
        return note.execute().then((result) => {
          expect(result.length).toEqual(1);
        });
      });
      it('should add a new request upon execution of the fetch method', () => {
  
        const note = new Note({ action: '--delete', id: '5f88d1a29685cf16d9ae6c05'});
    
        return note.execute()
        .then((result) => {
            console.log();
          expect(result).toBeFalsy();
        });
      });
  });
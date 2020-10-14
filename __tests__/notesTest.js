'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console,'log');
test('Ensures Notes output is Valid', () => {
    
    const notes2 = new Notes('--bad', 'blah');
    notes2.execute(notes2.action, notes2.payload);
    
    expect(console.log).not.toHaveBeenCalled();
    const notes = new Notes('--add', 'blah');
    notes.execute(notes.action, notes.payload);

    expect(console.log).toHaveBeenCalledWith(`Adding Note: ${notes.payload}`);

});

'use strict';

const Input = require('../lib/input.js');

test('Ensures Input is Valid', () => {
    const input = new Input('--add', 'blah');
    const input2 = new Input('--bad', 'blah');
    
    expect(input.isValid(input.action)).toBeTruthy();
    expect(input).toEqual({action: '--add', payload: 'blah'});
    expect(input2.isValid(input2.action)).toBeFalsy();
});
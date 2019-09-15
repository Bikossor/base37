const base37 = require('../dist/base37');

test('Successfully encode "Hello World!"', () => {
    expect(
        base37.encode('Hello World!')
    ).toBe('zryy0wd03yqx');    
});
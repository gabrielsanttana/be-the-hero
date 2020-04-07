const generateUniqueID = require('../../src/utils/generateUniqueID');

describe('The generateUniqueID function', () => {
  it('generates a unique ID', () => {
    const id = generateUniqueID();

    expect(id).toHaveLength(8);
  });
});
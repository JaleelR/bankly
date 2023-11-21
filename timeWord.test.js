const timeWord  = require('./timeWord');


describe('#timeword works', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('#timeword Works', () => {
  test('test for midnight', () => {
    const time = timeWord("0", "0");
    expect(time).toEqual("midnight");
  });
  test('test for pm', () => {
    const time2 = timeWord("23", "03");
    expect(time2).toEqual("eleven Oh three pm");
  });
  test('test for am', () => { 
        const time3 = timeWord("4", "0"); 
    expect(time3).toEqual('four Oh clock am');
  });
});

describe("invalid times", () => {
    test('test for am', () => {
    const time3 = timeWord("28", "90");
    const time4 = timeWord("-02", "47");
    expect(time3).toEqual('not a valid time');
    expect(time4).toEqual('not a valid time');
  });
})

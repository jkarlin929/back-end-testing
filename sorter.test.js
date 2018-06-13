//tests
const sorter = require('./sorter')

const unsorted = [100.5, -40.7, 40000, -160, 30, 7, (3 / 5), Number((6 / 7).toPrecision(2)), 0, 6e2];

const sorted = [-160, -40.7, 0, 0.6, 0.86, 7, 30, 100.5, 600, 40000,];


  describe('sanity check', () => {
  it('can do obvious stuff', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Bubble sort', () => {
  it('sorts an array', () => {
    expect(sorter(unsorted)).toEqual(sorted);
  });
});
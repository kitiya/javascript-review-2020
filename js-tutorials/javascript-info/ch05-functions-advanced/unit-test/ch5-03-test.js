describe("3.1 Are counters independent?", function() {
  let counter = makeCounter();
  let counter2 = makeCounter();

  it("makeCounterA", function() {
    assert.equal(counter(), 0);
    assert.equal(counter(), 1);
  });

  it("makeCounterB", function() {
    assert.equal(counter2(), 0);
    assert.equal(counter2(), 1);
  });
});

describe("3.2. Counter object", function() {
  let counter = new Counter();

  it("Counting up and down", function() {
    assert.equal(counter.up(), 1);
    assert.equal(counter.up(), 2);
    assert.equal(counter.down(), 1);
  });
});

describe("3.3 Sum with closuer", function() {
  it("Counting up and down", function() {
    assert.equal(sum(1)(2), 3);
    assert.equal(sum(5)(-3), 2);
  });
});

describe("3.4 Filter through function", function() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("filter inBetween()", function() {
    assert.deepEqual(arr.filter(inBetween(3, 6)), [4, 5]);
    assert.deepEqual(arr.filter(inBetween(10, 12)), []);
  });

  it("filter inArray()", function() {
    assert.deepEqual(arr.filter(inArray([1, 2, 5, 10])), [1, 2, 5]);
    assert.deepEqual(arr.filter(inArray([1, 2, 3])), [1, 2, 3]);
    assert.deepEqual(arr.filter(inArray([11])), []);
  });

});

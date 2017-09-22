describe("6.1 Set and decrease for counter", function() {
  let ct = makeCounter();

  it("Increase counter", function() {
    assert.equal(ct(), 1);
    assert.equal(ct(), 2);
  });

  it("Set counter", function() {
    assert.equal(ct.set(11), 11);
    assert.equal(ct.set(5), 5);
  });

  it("Decrease counter", function() {
    assert.equal(ct.decrease(2), 3);
    assert.equal(ct.decrease(), 2);
    assert.equal(ct.decrease(10), -8);
    assert.equal(ct.decrease(-20), 12);
  });
});

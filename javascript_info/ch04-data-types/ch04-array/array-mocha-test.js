
describe("a miximal subarray", function() {
  it("Test case#1", function() {
    assert.equal(5,getMaxSubSum([-1, 2, 3, -9]));
  });

  it("Test case#2", function() {
    assert.equal(6,getMaxSubSum([2, -1, 2, 3, -9]));
  });

  it("Test case#3", function() {
    assert.equal(11,getMaxSubSum([-1, 2, 3, -9, 11]));
  });

  it("Test case#4", function() {
    assert.equal(3,getMaxSubSum([-2, -1, 1, 2]));
  });

  it("Test case#5", function() {
    assert.equal(100,getMaxSubSum([100, -9, 2, -3, 5]));
  });

  it("Test case#6", function() {
    assert.equal(6,getMaxSubSum([1, 2, 3]));
  });

  it("Test case#7", function() {
    assert.equal(0,getMaxSubSum([]));
  });
});


describe("a miximal subarray - solution", function() {
  it("Test case#1", function() {
    assert.equal(5,getMaxSubSum_Soln([-1, 2, 3, -9]));
  });

  it("Test case#2", function() {
    assert.equal(6,getMaxSubSum_Soln([2, -1, 2, 3, -9]));
  });

  it("Test case#3", function() {
    assert.equal(11,getMaxSubSum_Soln([-1, 2, 3, -9, 11]));
  });

  it("Test case#4", function() {
    assert.equal(3,getMaxSubSum_Soln([-2, -1, 1, 2]));
  });

  it("Test case#5", function() {
    assert.equal(100,getMaxSubSum_Soln([100, -9, 2, -3, 5]));
  });

  it("Test case#6", function() {
    assert.equal(6,getMaxSubSum_Soln([1, 2, 3]));
  });

  it("Test case#7", function() {
    assert.equal(0,getMaxSubSum_Soln([]));
  });
});
describe("testMyScript", function() {
  let myScript = mochaTest();

  console.log(myScript);

  it("Mocha Test", function() {
    let myScript = mochaTest();
    assert.equal(mochaTest(), "Hello");
  });

});

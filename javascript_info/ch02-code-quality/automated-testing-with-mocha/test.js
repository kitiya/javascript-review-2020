// verstion 6: Extending the spec
describe("pow", function() {

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });


  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  describe("raises x to power 5", function() {

    function makeTest(x) {
      let expected = x * x * x * x * x;
      it(`${x} in the power 5 is ${expected}`, function() {
        assert.equal(pow(x, 5), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... more tests to follow here, both describe and it can be added   
});


/*
// version 1
describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});
*/

/*
// version 2: Improving the spec

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

});
*/

/*
// version 3: Improving the spec

describe("pow", function() {

	it("2 raised to power 3 is 8", function() {
		assert.equal(pow(2, 3), 8);
	});

	it("3 raised to power 3 is 27", function() {
		assert.equal(pow(3, 3), 27);
	});

});
*/

/*
// version 4: Improving the implementation
describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});
*/

/*
// version 5: Nested describe
describe("pow", function() {

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  describe("raises x to power 5", function() {

    function makeTest(x) {
      let expected = x * x * x * x * x;
      it(`${x} in the power 5 is ${expected}`, function() {
        assert.equal(pow(x, 5), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... more tests to follow here, both describe and it can be added   
});

*/
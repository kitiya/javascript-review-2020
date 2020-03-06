for (var i = 0; i < 45; i++) {
  var div = document.createElement("div");
  div.className += "var";

  var boxId = i + 1;
  div.innerText = boxId;

  div.onclick = function() {
    alert("you clicked on a box #" + boxId);
  };
  document.querySelector(".var-container").appendChild(div);
}

// using let
// So instead of having our i being overwritten each and every time we go through the loop,
// we want to store this value with all of our divs.
for (let i = 0; i < 45; i++) {
  let div = document.createElement("div");
  div.className += "let";

  let boxId = i + 1;
  div.innerText = boxId;

  div.onclick = function() {
    alert("you clicked on a box #" + boxId);
  };
  document.querySelector(".let-container").appendChild(div);
}

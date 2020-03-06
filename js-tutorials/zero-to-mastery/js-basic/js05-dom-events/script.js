let app = document.querySelector("#app");
app.innerHTML = `
  <div id="js005">
    <h1>Shopping List</h1>
    <input class="new-item" type="text" placeholder="new list" />
    <button class="add-btn">Add to list</button>
    <ul>  
      <li>
        <span class="shop-item">Notebook</span>
        <button class="remove-btn">remove</button>
      </li>
      <li>
        <span class="shop-item">Jello</span>
        <button class="remove-btn">remove</button>
      </li>
      <li>
        <span class="shop-item">Birthday Cake</span>
        <button class="remove-btn">remove</button>
      </li>
    </ul>
</div>`;

let addBtn = document.querySelector(".add-btn");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let shopItems = document.querySelectorAll(".shop-item");
let removeBtnList = document.querySelectorAll(".remove-btn");

// 1. Add item to the list
function addNewItem() {
  let newItem = input.value;
  if (!newItem) return;

  let li = document.createElement("li");
  insertShopItemSpan(li, newItem);
  insertRemoveButton(li);
  ul.appendChild(li);
  input.value = "";
}

function insertShopItemSpan(li, newItem) {
  let spanNode = document.createElement("span");
  spanNode.classList.add("shop-item");
  spanNode.addEventListener("click", handleToggle);
  spanNode.appendChild(document.createTextNode(newItem));

  li.appendChild(spanNode);
}

function insertRemoveButton(li) {
  let btn = document.createElement("button");
  btn.classList.add("remove-btn");
  btn.addEventListener("click", handleRemoveClick);
  btn.appendChild(document.createTextNode("remove"));
  li.appendChild(btn);
}

function handleAddClick() {
  addNewItem();
}

function handleKeypress(event) {
  // using "event.which" works as well
  if (event.keyCode === 13) {
    addNewItem();
  }
}

// 2. If you click on the list item, it toggles the .done  class on and off.
function handleToggle(event) {
  let li = event.target;
  li.classList.toggle("done");
}

// 3. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
function handleRemoveClick(event) {
  let li = event.target.parentElement;
  let ul = li.parentElement;
  ul.removeChild(li);
}

addBtn.addEventListener("click", handleAddClick);
input.addEventListener("keypress", handleKeypress);

shopItems.forEach(item => {
  item.addEventListener("click", handleToggle);
});

removeBtnList.forEach(item => {
  item.addEventListener("click", handleRemoveClick);
});

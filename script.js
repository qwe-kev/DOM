var itemList = document.getElementById("items");
var formInput = document.getElementById("addForm");
var filter = document.getElementById("filter");

var addItem = function(e) {
    e.preventDefault();
    var itemValue = document.getElementById("item").value;
    var description = document.getElementById("item-desc").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(itemValue));
    li.appendChild(document.createTextNode(description));
    li.className = "list-group-item";
    var button = document.createElement("button");
    button.className = "btn btn-danger btn-sm float-right delete";
    button.textContent = "X";
    li.appendChild(button);
    itemList.appendChild(li);
}

var filterItem = function(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName("li");
    Array.from(items).forEach(item => {
        if((item.firstChild.textContent.toLowerCase().indexOf(text) != -1)) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    })
}
var deleteItem = function(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure?")) {
            e.target.parentNode.remove();
        }
    }
}

filter.addEventListener('keyup', filterItem);
formInput.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);

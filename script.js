var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit',addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    var li = document.createElement('li');
    var itemValue = document.getElementById("item").value;
    li.appendChild(document.createTextNode(itemValue));
    li.className = "list-group-item";

    var deleteBtn = document.createElement("button");
    var editBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    editBtn.className = "btn btn-success btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode("Edit"));
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
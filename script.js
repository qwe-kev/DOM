const node = document.createElement("li");
const textNode = document.createTextNode("Item 5");
node.appendChild(textNode);

var listGroup = document.getElementById("items").appendChild(node);

var listItem = document.getElementById("items").lastElementChild;
listItem.style.fontWeight = "bold";
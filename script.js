var itemList = document.querySelector("#items");

//parentNode parentElement
itemList.parentNode.style.backgroundColor = "#f4f4f4"

//children
itemList.children[1].style.fontFamily = "Verdana";

//firstElementChild
itemList.firstElementChild.style.color = "blue";

//lastElementChild
itemList.lastElementChild.textContent = "Hello 4";

//nextSibling
itemList.nextSibling = document.createElement('div')

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
itemList.previousSibling;

//previousElementSibling
itemList.previousElementSibling

// createElement
const newDiv = document.createElement('div');

// add class
newDiv.className = "NEW DIV";

// add id
newDiv.id = "DIV1"

// add attribut
newDiv.setAttribute('title','NEW ELEMENT');

//add textNode

var divContent = document.createTextNode("Hello World");
newDiv.appendChild(divContent);

let container = document.querySelector("header .container");
let header = document.querySelector("header h1");


container.insertBefore(newDiv, header);
itemList.children.insertBefore(newDiv, itemList[0])
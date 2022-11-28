var headerTitle = document.getElementById("main-header");
headerTitle.style.borderBottom = "2px solid #000";

var headerClasses = document.getElementsByClassName("title");
headerClasses[0].setAttribute("style","font-weight:bold");
headerClasses[0].setAttribute("style","color:green");

var itemsList = document.getElementsByClassName("list-group-item");
itemsList[2].style.backgroundColor = "green";

for(let i = 0;i < itemsList.length;i++) {
    itemsList[i].style.fontWeight = "bold";
}

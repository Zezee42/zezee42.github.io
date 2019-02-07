var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");
var deleteButton = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML= li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


//click on a list item
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

//strikethrough the text
ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}



//delete Buttons

//add event listener for the first 6 buttons
for(var i=0 ; i < deleteButton.length ; i++){
	deleteButton[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:
function removeParent(event) {
  event.target.removeEventListener("click", removeParent, false);
  event.target.parentNode.remove();
}

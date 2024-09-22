const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



//Required function to display the input value in the list
function taskAdd () {
    if(inputBox?.value==="") {
        alert("You must write something")
    } else {
        let li = document.createElement("li");
        li.innerHTML=inputBox?.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = "";
    saveList();
}


//Function required to mark a single item in the list
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveList();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveList();
    }
},false)


//Required function to save the current list to locale
function saveList() {
    localStorage.setItem("data" , listContainer.innerHTML);
}


//Required function to show the current list
function showList() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showList();


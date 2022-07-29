let input = document.querySelector("input");
let inputEnter = document.querySelector(".plus");
let root = document.querySelector(".list");
let dragged, third;
let listArray = JSON.parse(localStorage.getItem("listArray")) || [];

input.addEventListener("keyup", (event) => {
    if(event.keyCode == 13){
        let inputValue = event.target.value;
        listArray.push(inputValue);
        event.target.value = "";
        localStorage.setItem("listArray", JSON.stringify(listArray));
        createUI();
    }
});
inputEnter.addEventListener("click", (event) => {
    let inputValue = input.value;
    listArray.push(inputValue);
    input.value = "";
    localStorage.setItem("listArray", JSON.stringify(listArray));
    createUI();
});
    createUI();

document.addEventListener("dragstart", (event) => {
    dragged = event.target;
    event.target.classList.add("dragging");
});

document.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging");
});

document.addEventListener("dragover", (event) => {
    event.preventDefault();
    return false;
});

document.addEventListener("dragenter", (event) => {
    if (event.target.classList.contains("dropzone")) {
        event.target.classList.add("dragover");
      }
});

document.addEventListener("dragleave", (event) => {
    if (event.target.classList.contains("dropzone")) {
        event.target.classList.remove("dragover");
      }
});

document.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("dropzone")) {
        event.target.classList.remove("dragover");
        third = event.target.innerHTML;
        event.target.innerHTML = dragged.innerHTML;
        dragged.innerHTML = third;
      }
});



function createUI() {
    root.innerHTML = ""
    listArray.forEach((elm) => {
        let li = document.createElement("li");
        li.classList.add("flex", "dropzone");
        li.draggable = true;
        li.innerText = elm;
        let span = document.createElement("span");
        span.innerText = "drag me";
        li.append(span);
        root.append(li);
    });
}
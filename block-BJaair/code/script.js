let form = document.querySelector("form");
let root = document.querySelector(".notice-board");
let titleValue, categoryValue;
let categoryArray, titleArray;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    titleValue = title.value;
    categoryValue = category.value;
    createUI();
    

});

function createUI() {
    let notice = document.createElement("div");
    notice.classList.add("notice");
    let categoryElm = document.createElement("p");
    categoryElm.classList.add("category");
    categoryElm.innerText = categoryValue;
    let titleElm = document.createElement("h3");
    titleElm.classList.add("title");
    titleElm.innerText = titleValue;
    notice.append(categoryElm, titleElm);
    root.append(notice);

}

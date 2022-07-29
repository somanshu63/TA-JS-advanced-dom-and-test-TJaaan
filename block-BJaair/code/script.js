let form = document.querySelector("form");
let root = document.querySelector(".notice-board");


let cardsData = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let titleValue = event.target.elements.title.value;
    let categoryValue = event.target.elements.category.value;
    cardsData.push({titleValue, categoryValue});
    createUI();    

});

function handleEdit(event, info, id, label) {
    let elm = event.target;
    let input = document.createElement("input");

    input.value = info;
    input.addEventListener("keyup", (e) => {
        if(e.keycode == 13){
            let updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            parent.replaceChild(input, elm);
            createUI();
        }
    });
    input.addEventListener("blur", (e) => {
        let updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            parent.replaceChild(input, elm);

            createUI();
    });
    let parent = event.target.parentElement;
    parent.replaceChild(input, elm);
}

function createUI() {
    root.innerHTML = "";
    cardsData.forEach((cardInfo) => {
        let notice = document.createElement("div");
        notice.classList.add("notice");
        let categoryElm = document.createElement("p");
        categoryElm.classList.add("category");
        categoryElm.addEventListener("dblclick", (event) => {
            handleEdit(event, cardInfo.categoryValue, cardInfo.id, "categoryValue")
        });
        categoryElm.innerText = cardInfo.categoryValue;
        let titleElm = document.createElement("h3");
        titleElm.addEventListener("dblclick", (event) => {
            handleEdit(event, cardInfo.titleValue, cardInfo.id, "titleValue")
        });
        titleElm.classList.add("title");
        titleElm.innerText = cardInfo.titleValue;
        notice.append(categoryElm, titleElm);
        root.append(notice);
        });

}

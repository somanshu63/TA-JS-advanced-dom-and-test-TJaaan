let quotesElm = document.querySelector(".quotes");

let max = 3;
let index = 0;

function addQuotes() {
    for (let i = 0; i < max; i++) {
        let quote = document.createElement("blockquote");
        quote.innerText = quotes[index].quoteText;
        let quoteAuthor = document.createElement("cite");
        quoteAuthor.innerText = quotes[index].quoteAuthor;
        quotesElm.append(quote, quoteAuthor);
        index++;

    }
}
addQuotes()


document.addEventListener("DOMContentLoaded", () => {
    alert(`the content of the DOM is loaded`);
});


window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
        addQuotes();
    }
    
});

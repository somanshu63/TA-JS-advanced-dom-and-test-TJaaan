let quotesElm = document.querySelector(".quotes");
for (let i = 0; i < 3; i++) {
    let quote = document.createElement("blockquote");
    quote.innerText = quotes[i].quoteText;
    let quoteAuthor = document.createElement("cite");
    quoteAuthor.innerText = quotes[i].quoteAuthor;
    quotesElm.append(quote, quoteAuthor);
}



document.addEventListener("DOMContentLoaded", () => {
    alert(`the content of the DOM is loaded`);
});


window.addEventListener("scroll", () => {
    quotes.forEach((elm) => {
        let quote = document.createElement("blockquote");
        quote.innerText = elm.quoteText;
        let quoteAuthor = document.createElement("cite");
        quoteAuthor.innerText = elm.quoteAuthor;
        quotesElm.append(quote, quoteAuthor);
    });
    
});

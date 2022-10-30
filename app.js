const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

loadQuotes();

const displayQuotes = quote => {
    console.log(quote);
    const blockquote = document.getElementById('quotes');
    blockquote.innerText = quote.quote;
}

const loadQuote = () => {
    fetch('https://api.kanye.rest')
  .then(response => response.json())
  .then(json => displayQuote(json))
}


const displayQuote = quote => {
    const loadBtn = document.getElementById('quote');
    loadBtn.innerText = quote.quote;
}
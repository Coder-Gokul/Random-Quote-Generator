const quoteText = document.querySelector("#quote");
const quoteBtn = document.querySelector(".next-icon");
const author = document.querySelector(".blockquote-footer");
const sound = document.querySelector(".sound");
const copy = document.querySelector(".copy");
const twitter = document.querySelector(".twitter");


function nextQuote() {
   quoteBtn.textContent = "Loading...";
   copy.title = "copy to clipboard"
 fetch("https://api.quotable.io/random").then(fetchedData => fetchedData.json()).then(output =>{
    quoteText.textContent = output.content;
    author.textContent = output.author;
   quoteBtn.textContent = "New Quote";
 })
}

sound.addEventListener("click", ()=>{
   let listen = new SpeechSynthesisUtterance(`${quoteText.textContent}; by author ${author.textContent}`);
   speechSynthesis.speak(listen);
})

copy.addEventListener("click", ()=>{
   copy.title = "Copied";
   navigator.clipboard.writeText(quoteText.textContent);
})

twitter.addEventListener("click", ()=>{
   let tweet = `https://twitter.com/intent/tweet?url=${quoteText.textContent}`;
   window.open(tweet);
})
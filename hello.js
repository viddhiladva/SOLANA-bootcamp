const Quote = require('inspirational-quotes');

console.log(Quote.getQuote());
console.log(Quote.getQuote({ author: false }));
console.log(Quote.getRandomQuote()); 
const books = ["A Smarter Way to Learn JavaScript", "Eloquent JavaScript", "JavaScript & JQuery", "Learn JavaScript VISUALLY", "The Definitive Guide", "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript", "You Don’t Know JS"];
let jsBookArray = [];
const searching = "javascript";
for (const book of books) {
    if (book.toLowerCase().includes(searching.toLowerCase())) {
        jsBookArray.push(book);
    }
};
console.log(jsBookArray);
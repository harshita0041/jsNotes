// const books = {
//     title : 'Atomic Habits',
//     author : 'James Clear',
//     year : 2018
// }

// console.log(books)

// // * Task  2

// console.log(books.title);

let books = {
  title: "Harry Potter and the Cursed Child",
  author: "J.K Rowling",
  year: 2016,
  getBookInfo: function () {
    return `${this.title} by ${this.author}`;
  },
  updatedYear: function (year) {
    this.year = year;
  },
};

console.log(books.getBookInfo());
console.log(books.year);

books.updatedYear(2021)
console.log(`Updated Year ${books.year}`)

function Book(title, author, isRead = false) {
  const book = {};

  book.title = title;
  book.author = author;
  book.isRead = isRead;

  book.toggleReadStatus = function () {
    this.isRead = !this.isRead;
  };

  book.describe = function () {
    return ` "${this.title}" by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;
  };

  return book;
}

const myBook = Book("The Alchemist", "Paulo Coelho");

console.log(myBook.describe()); 

myBook.toggleReadStatus();

console.log(myBook.describe()); 

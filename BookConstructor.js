function BookConstructor(title, author, isRead = false) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;

  this.toggleReadStatus = function () {
    this.isRead = !this.isRead;
  };

  this.describe = function () {
    return ` "${this.title}" by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;
  };
}

const book3 = new BookConstructor("To Kill a Mockingbird", "Harper Lee");
console.log(book3.describe());
book3.toggleReadStatus();
console.log(book3.describe());

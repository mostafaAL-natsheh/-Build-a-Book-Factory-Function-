class Book{
constructor(title,author,isRead=false){
 this.title = title;
    this.author = author;
    this.isRead = isRead;
}
toggleReadStatus() {
    this.isRead = !this.isRead;
  }
 describe() {
    return `📖 "${this.title}" by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;
  }
}
const book3 = new Book("Brave New World", "Aldous Huxley");
book3.toggleReadStatus();
console.log(book3.describe()); 
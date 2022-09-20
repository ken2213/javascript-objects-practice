function Book(title, author, numOfPages, readOrNot) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readOrNot = readOrNot;
  this.describeBook = function() {
    console.log(`Book Title: ${book1.title}\nAuthor: ${book1.title}\nNumber of Pages: ${book1.numOfPages}\nRead or Not? ${book1.readOrNot}`);
  }
}

const book1 = new Book('Peenoise', 'AKT', '200', true);

book1.describeBook()

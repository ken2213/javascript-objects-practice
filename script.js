function Book(title, author, numOfPages, readOrNot) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readOrNot = readOrNot;
  this.describeBook = function() {
    console.log(`Book Title: ${title}\nAuthor: ${title}\nNumber of Pages: ${numOfPages}\nRead or Not? ${readOrNot}`);
  }
}

const book1 = new Book('Peenoise', 'AKT', 200, true);
const book2 = new Book('He\'s into her', 'Maxinejiji', 512, false);


book1.describeBook();
book2.describeBook();

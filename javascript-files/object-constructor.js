
// OBJECT CONSTRUCTOR

function Book(title, author, numOfPages, readOrNot) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readOrNot = readOrNot;

  // this.describeBook = function() {
  //   console.log(`Book Title: ${title}\nAuthor: ${title}\nNumber of Pages: ${numOfPages}\nRead or Not? ${readOrNot}`);
  // }

}

const book1 = new Book('Peenoise', 'AKT', 200, true);
const book2 = new Book('He\'s into her', 'Maxinejiji', 512, false);


console.log(book1.author);
console.log(book2.author);



/* 
  PROTOTYPE

  If you’re using constructors to make your objects it is best to 
  define functions on the prototype of that object.

  Doing so means that a single instance of each function will be shared 
  between all of the Student objects. If we declare the function directly 
  in the constructor, like we did when they were first introduced, that 
  function would be duplicated every time a new Student is created. 

  In this example, that wouldn’t really matter much, but in a project 
  that is creating thousands of objects, it really can make a difference.
*/

Book.prototype.describeBook = function() {
  console.log(`Book Title: ${this.title}\nAuthor: ${this.author}\nNumber of Pages: ${this.numOfPages}\nRead or Not? ${this.readOrNot}`);
}


book1.describeBook();
book2.describeBook();


// Recommended Method for Prototypal Inheritance

/* 
  Object.create

  So far you have seen several ways of making an object inherit the prototype from another object. At this point in history, the recommended way of setting the prototype of an object is Object.create

  Object.create very simply returns a new object with the specified prototype and any additional properties you want to add. For our purposes, you use it like so:

*/









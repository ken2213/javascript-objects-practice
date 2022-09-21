
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

// ANOTHER EXAMPLE

function BattleRapper() {

}

BattleRapper.prototype.sayName = function() {
  console.log(`Good Morning! I'm ${this.name}!`);
}

BattleRapper.prototype.revealLocation = function() {
  console.log(`${this.name} is living in ${this.location}`);
}

BattleRapper.prototype.revealAge = function() {
  console.log(`${this.name} is ${this.age} years old!`);
}

BattleRapper.prototype.sayGirlfriend = function() {
  console.log(`${this.girlfriendName} is his GF!`)
}



function FlipTopEmcee(name, age, reppin, location) {
  this.name = name;
  this.age = age;
  this.reppin = reppin;
  this.location = location;
}



FlipTopEmcee.prototype = Object.create(BattleRapper.prototype)

const akt = new FlipTopEmcee("AKT", null, null, "Olongapo");
akt.sayName();
akt.revealLocation();
akt.revealAge();
akt.sayGirlfriend();

const loonie = new FlipTopEmcee("Loonie", 35, "Stick Figgas", "Pasig")
loonie.sayName();
loonie.revealLocation();
loonie.revealAge();
loonie.sayGirlfriend();








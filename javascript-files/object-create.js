/* 
  Object.create

  So far you have seen several ways of making an object inherit the prototype from another object. At this point in history, the recommended way of setting the prototype of an object is Object.create

  Object.create very simply returns a new object with the specified prototype and any additional properties you want to add. For our purposes, you use it like so:
*/

function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}


// Student.prototype.sayAge = function() {
//   console.log(this.age)
// }


function EightGrader(name) {
  this.name = name;
  this.grade = 8;
  this.age = 14;
}

EightGrader.prototype = Object.create(Student.prototype)

const carl = new EightGrader("carl");
carl.sayName();
console.log(carl.grade)











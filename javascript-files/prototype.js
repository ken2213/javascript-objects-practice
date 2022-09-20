function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
console.log(`Hello! My name is ${this.name}`)
}

Student.prototype.goToProm = function() {
  console.log("Eh... go to prom?")
}

Student.prototype.haveFun = function() {
  console.log("Let's play Basketball!!")
}

const student1 = new Student('Ketel', 11);
const student2 = new Student('Terrence', 4);

// Ketel Object
student1.sayName();
student1.goToProm();

// Terrence Object
student2.sayName()
student2.haveFun();

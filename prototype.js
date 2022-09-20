function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

Student.prototype.goToProm = function() {
  console.log("Eh... go to prom?")
}

const student1 = new Student('Ketel', 11);
const student2 = new Student('Terrence', 4);

student1.goToProm();
student2.sayName()

function Person(name1, name2, eye, height, weight) {
  this.firstName = name1;

  this.surName = name2;
  this.eyeColor = eye;
  this.height = height;
  this.weight = weight;
}

let person1 = new Person("chris");
let person2 = new Person("Wesley", "Kelly", "Brown", 191, "93.5 kg");

function NewTodo(todo, otherThing) {
  this.thing = todo;
  this.price = otherThing;
}

let todosArray = [];

function createTodo(todo, otherThing) {
  let newThing = new NewTodo(todo, otherThing);

  todosArray.push(newThing);

  todosArray.forEach((element) => {
    console.log(element);

    localStorage.setItem("Items for sale", JSON.stringify(todosArray));
  });
}

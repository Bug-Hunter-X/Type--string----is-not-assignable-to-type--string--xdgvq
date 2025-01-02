function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

for (let i = 0; i < user.length; i++) {
  console.log(greeter(user[i]));
}

//Alternative solution: modify the greeter function
function greeter2(people: string[]) {
  return people.map(person => "Hello, " + person);
}
console.log(greeter2(user));
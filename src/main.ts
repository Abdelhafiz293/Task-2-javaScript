let name1: string = "Ahmed Abdelhafiz";
console.log(name);
let age: number = 21;
console.log(age);
let isStudent: boolean = true;
console.log(isStudent);
let hobbies: string[] = ["Designing", "Coding", "Gaming"];
console.log(hobbies);
let details: any = {
  name: "Ahmed",
  age: 21,
  isStudent: true,
  hobbies: ["Designing", "Coding", "Gaming"],
};
console.log(details);

function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet(name1));

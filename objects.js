const person1 ={
firstName :"JAMES",
lastName  : "Harden",
age  : 30,


}
const fullNames= (firstName,lastName)=>{
    return firstName + lastName
    }
console.log(person1.firstName);
console.log(person1.lastName);
console.log(fullNames);
// this keyword
const person2 ={
    firstName :"Jane",
    lastName  : "SMITH",
    age  : 20,
    
    
    }
    console.log(`${this.age}`);
    console.log(`${this.firstName} is cleaning the room`);
 // objects and functions   
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("alice"); // true
getAge("toString"); // [Function: toString]
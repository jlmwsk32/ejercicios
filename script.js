//Ejercicio 1
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
    let sentence = arr.join(" ");
    console.log(sentence);
}

printOutString();

//Ejercicio 2
function doubleNumbers(numbers) {
    let doubledArray = numbers.map(function(number) {
      return number * 2;
    });
    console.log(doubledArray);
  }
  doubleNumbers([1, 2, 4, 5]);

//Ejercicio 3
  function calculateSumAndProduct(numbers) {
  
    let sum = numbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  
    let product = numbers.reduce(function (accumulator, currentValue) {
      return accumulator * currentValue;
    }, 1);
  
    console.log("The sum is " + sum + ". The product is " + product + ".");
  }
  
  calculateSumAndProduct([1, 2, 3, 4]);

  //Ejercicio 4
  let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {

  let commonCourses = courses1.filter(function(course) {
    return courses2.includes(course);
  });

 
  if (commonCourses.length > 0) {
    console.log('Common courses: ' + commonCourses.join(', '));
  } else {
    console.log('No common courses found.');
  }
}


findCommonCourses(student1Courses, student2Courses);

//Ejercicio 5
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

people.splice(people.indexOf("Dani"), 1);
people.splice(people.indexOf("Juan"), 1);

let luisIndex = people.indexOf("Luis");
if (luisIndex !== -1) {
  let luisRemoved = people.splice(luisIndex, 1)[0]; 
  people.unshift(luisRemoved); 
}

people.push("Jesus");


for (let person of people) {
  console.log(person);
  if (person === "Maria") {
    break;
  }
}

let mariaIndex = people.indexOf("Maria");
console.log("Index of Maria:", mariaIndex);

console.log(people);
//Ejercicio 6
function bubbleSort(arr) {
    const n = arr.length;
    const sortedArray = arr.slice();
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          const temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
  
    return sortedArray;
  }
  
  const inputArray = [3, 6, 12, 5, 100, 1];
  const sortedArray = bubbleSort(inputArray);
  
  console.log("Entrada:", inputArray);
  console.log("Salida:", sortedArray);
  
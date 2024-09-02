// part 1 stackoverflow

// Declare a global counter variable.
let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
function increment() {
    try {
        counter++;
        increment(); // Recursive call
    } 
    catch (error) {
        console.error('Error:', error.message);
        console.log('Counter value:', counter);
    }
}

// Start the recursion
increment();





// part 2:Trampolines


// Step One: Write the recursive function.

const flatten = (arr) => {
  if (arr === 0) return 1;
  return arr * factorial(arr -1);

}
  
  // Step Two: Modify the recursive function.

  const flattenTrampoline = (arr, acc = []) => {
    if (arr.length === 0) return acc;
    
    const [first, ...rest] = arr;
    
    if (Array.isArray(first)) {
      return () => flattenTrampoline(first.concat(rest), acc);
    } else {
      return () => flattenTrampoline(rest, acc.concat(first));
    }
  }
  // Step Three: Create a trampoline function.
  const trampoline = (fn, ...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  }
  const nestedArray = [1, [2, [3, [4, [5]]]], 6];
  console.log(trampoline(flattenTrampoline(nestedArray)));








//   Part 3: Deferred Execution

 // Create a simple HTML element to hold text. 
// <div id="output"></div>



// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.// Once complete, use the alert() method to alert the user that the calculation is finished.

// Cache this HTML element into a JavaScript variable.
// const outputElement = document.getElementById('output');
 
  const outputElement = document.getElementById('output');

// Function to check if a number is prime
const isPrime = (num) => {
  if (num < 1) return false;
   if (num === 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Function to add prime numbers between 1 and n to the HTML element
function addPrimes(n) {
  let i = 1;

  function addPrimeRecursive() {
    if (i > n) {
      alert("Calculation completed");
      return;
    }

    if (isPrime(i)) {
      const primeElement = document.createElement('p');
      primeElement.textContent = i;
      outputElement.appendChild(primeElement);
    }

    i++;
    setTimeout(addPrimeRecursive, 0); // recursive call
  }

  // Start the recursive process
  addPrimeRecursive();
}

// Call the function with n = 10000
addPrimes(10000);





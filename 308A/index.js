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





// // part 2: stackoverflow



// Step One: Write the recursive function.
const flattenArray = (arr) => {
    return arr.reduce((acc, val) => {
      return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
    }, []);
  };
  
  // Step Two: Modify the recursive function.
const flattenArrayTrampoline = (arr) => {
    return () => arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flattenArrayTrampoline(val)()) : acc.concat(val);
    }, []);
  };
  
  // Step Three: Create a trampoline function.
const trampoline = (fn, ...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
  
  /**
   * Now, we can call the factorial function with as high
   * a number as we would like (as long as we don't run into
   * other errors, like exceeding MAX_SAFE_INTEGER, or looping
   * too many times...).
   * 
   * Unfortunately, both of these are the case here, but
   * the principle of trampolining holds!
   */
  const flattenedArray = trampoline(flattenArrayTrampoline([1, [2, [3, [4, [5]]]]]));
  console.log(flattenedArray);


//   Part 3: Deferred Execution

// // Create a simple HTML element to hold text. 
// <div id="output"></div>

// Cache this HTML element into a JavaScript variable.
const outputElement = document.getElementById('output');

// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.// Once complete, use the alert() method to alert the user that the calculation is finished.

const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  
  const addPrimes = (n) => {
    for (let i = 1; i <= n; i++) {
      if (isPrime(i)) {
        outputElement.innerHTML += i + ' ';
      }
    }
    alert('Calculation finished');
  };

// using setTimeout

const addPrimesDeferred = (n, current = 1) => {
    if (current > n) {
      alert('Calculation finished');
      return;
    }
    
    if (isPrime(current)) {
      outputElement.innerHTML += current + ' ';
    }
  
    setTimeout(() => addPrimesDeferred(n, current + 1), 0);
  };
  
  addPrimesDeferred(10000);
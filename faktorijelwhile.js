let result = 1;
let number = 1;
function factorial (n) {
  while (number <= n) {
    result = number * result; 
    number++;   
  }  
  return result
}

console.log (factorial (5));


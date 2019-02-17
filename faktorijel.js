let result = 1;
function factorial (n) {
    for (let number = 1; number <=n; number++) {
        result = result * number;
    }
    console.log (result);
}

factorial (5);
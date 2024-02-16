const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i < 30; i++) {
        fib[i] = fib[i-1] + fib[i-2];
      }
    return fib[index]
};

// Do not edit below this line
module.exports = fibonacci;

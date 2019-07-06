class Fibonacci {
  static getFib(number) {
    var fib = [];
    let index = 2;

    fib[0] = 1;
    fib[1] = 2;

    for (index; fib[index - 1] <= number; index++) {
      fib[index] = fib[index - 1] + fib[index - 2];
    }

    return { fib, i: index - 2 };
  }

  encode(number) {
    let codeword = [];
    let { fib, i } = Fibonacci.getFib(number);

    while (number) {
      codeword[i] = '1';
      number = number - fib[i--];

      while (i >= 0 && fib[i] > number) {
        codeword[i--] = '0';
      }
    }

    codeword[fib.length + 1] = '1';

    return codeword.join('');
  }

  decode(string) {
    let value = 0;
    let splitString = string.split('');

    if (
      splitString.pop() === '1' &&
      splitString[splitString.length - 1] === '1'
    ) {
      const { fib } = Fibonacci.getFib(splitString.length);
      let i = 0;

      for (i; i < splitString.length; i++) {
        if (splitString[i] === '1') {
          value += fib[i];
        }
      }
    }

    return value;
  }
}

module.exports = new Fibonacci();

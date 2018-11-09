# Fibonacci code test

Implement a binary fibonacci decoder and encoder.
Look below for examples of the expected functionality.

## Fibonacci

_https://en.wikipedia.org/wiki/Fibonacci_coding_

_https://en.wikipedia.org/wiki/Fibonacci_number_

The Fibonacci sequence start is defined as below

1 2 3 5 8 13 21 etc...

Which means that the generated code words for the numbers 3, 6, 15 would become:

- 001 = 3 (0 + 0 + 3)
- 1001 = 6 (1 + 0 + 0 + 5)
- 010001 = 15 (0 + 2 + 0 + 0 + 0 + 13)
  (see links above for in-depth explanation)

All binary code word must end with 11 and contain no other instances of 11,
meaning that you will need to add an extra 1 as padding.
So the above numbers would be encoded to:

- 0011 = 3
- 10011 = 6
- 0100011 = 15

What you need to do is to implement a decoder and an encoder for translating back and forth between integers and binary code words which adheres to the logic provided in the links. There are pre-defined tests that cover some basic functionality and also skeleton-code of the class intended for the implementation. To get everything up and running you need to:

1. Install NodeJS (https://nodejs.org/en/)
2. run 'yarn install' or 'npm install'
3. Implement the encode & decode in 'src/fibonacci.js'
4. run 'yarn test:watch' or 'npm run text:watch'

// TASK: Base Conversion (codewars)
// In this kata you have to implement a base converter, which converts positive integers 
// between arbitrary bases / alphabets. Here are some pre-defined alphabets:

// var Alphabet = {
//   BINARY:        '01',
//   OCTAL:         '01234567',
//   DECIMAL:       '0123456789',
//   HEXA_DECIMAL:  '0123456789abcdef',
//   ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
//   ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// };
// The function convert() should take an input (string), the source alphabet (string) 
// and the target alphabet (string). You can assume that the input value always consists of 
// characters from the source alphabet. You don't need to validate it.

function convert (input, source, target) {
  let decimalValue = input.split('').reduce((acc, cur, i) => {
    return acc + (source.indexOf(cur) * (source.length ** (input.length - 1 - i)));
  }, 0);

  let result = [];
  let value = 0;

  do {
    value = decimalValue % target.length;
    decimalValue = Math.floor(decimalValue / target.length);
    result.push(target[value]);
  }
  while (decimalValue > 0);

  return result.reverse().join('');
};
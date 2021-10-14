// This is a spin off of my first kata.

// You are given a string containing a sequence of characters separated by commas.

// Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces.

// If the input string is empty, or the removal of the first and last items would cause the string to be empty, returns null.

// Examples
// // should remove the first and last character
// array('1,2,3') // => '2'
// array('1,2,3,4') // => '2 3'
// array('1,2,3,4,5') // => '2 3 4'

// // Should return null if the final string is empty
// array('') // => '' => null
// array('1') // => '' => null
// array('1,2') // => '' => null

const array = newArray =>
  newArray
    .split(',')
    .slice(1, -1)
    .join(' ') || null
/**
 * The core function of this module.
 * @param {Object} options The options used to generate the string.
 * @returns The generated string.
 * @example
 * // Generates a Hello, World! string that has a comma, exclamation
 * // mark and is all lowercase.
 * const generateHelloWorld = require('custom-hello-world');
 * 
 * console.log(generateHelloWorld({
 *   comma: true,
 *   exclamation: true,
 *   lowercase: true
 * }));
 */
function generateHelloWorld({ comma, exclamation, lowercase }) {
  let helloWorldStr = '';

  helloWorldStr += 'Hello';
  
  if (comma)
    helloWorldStr += ',';
  
  helloWorldStr += ' World';

  if (exclamation)
    helloWorldStr += '!';
  
  if (lowercase)
    helloWorldStr = helloWorldStr.toLowerCase();
  
  return helloWorldStr;
}

if (typeof module !== 'undefined')
  module.exports = generateHelloWorld;
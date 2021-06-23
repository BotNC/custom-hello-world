const { expect } = require('@jest/globals');
const generateHelloWorld = require('./index');

test('result returns a string', () => {
  const generated = generateHelloWorld({
    comma: true,
    exclamation: true,
    lowercase: false
  });

  expect(typeof generated).toBe('string');
});

test('comma option puts a comma', () => {
  const generated = generateHelloWorld({
    comma: true,
    exclamation: false,
    lowercase: false
  });

  expect(generated.charAt(5)).toBe(',');
});

test('exclamation option puts an exclamation mark', () => {
  const generated = generateHelloWorld({
    comma: false,
    exclamation: true,
    lowercase: false
  });

  expect(generated.charAt(generated.length - 1)).toBe('!');
});

test('lowercase option turns the text into lowercase', () => {
  const generated = generateHelloWorld({
    comma: false,
    exclamation: false,
    lowercase: true
  });

  expect(generated).toBe(generated.toLowerCase());
});
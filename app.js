function toUpperCaseText(text) {
    return text.toUpperCase();
}

function toLowerCaseText(text) {
  return text.toLowerCase();
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

function countCharacters(text) {
  return text.length(); //BUG: length is not a function
}


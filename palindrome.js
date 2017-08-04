function palindrome(rawString) {
  var cleanString = cleanStr(rawString);
  
  return cleanString == reverseString(cleanString);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function cleanStr(rawString) {
  var regex = /_/gi;
  var cleanStr = rawString.replace(regex, '');
  return cleanStr;
}

palindrome("eye");

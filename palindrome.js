function convertReverseString(value) {
  str = "";
  for (var i = 0; i < value.length; i++) {
    str += value[value.length - i - 1];
  }
  return str;
}

function isPalindrome(value) {
  value = value.toLowerCase();
  rev_value = convertReverseString(value);
  if (value === rev_value) {
    return true;
  } else {
    return false;
  }
}

s = "Nan";
console.log(isPalindrome(s));

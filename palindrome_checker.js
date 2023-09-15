function palindrome(str) {
  var reversed = str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase().split("").reverse().join("");
  if (str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase() === reversed)
    return true;
  return false;
}

var answer = palindrome("_eye");

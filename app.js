function toFreud(string) {
    var sexWord = "";
    let result = string.split(" "); // Split words in sentence
    if (result == "") { // check for no words
        return ""; // if no words, return that
    } else {
        for (var i = 0; i < string.split(" ").length; i++) { // loop for word amount length
            sexWord += "sex "; // push word 
        }

    }
    return sexWord.substring(0, sexWord.length - 1); // remove the empty space at end
}

console.log(toFreud("")) // ""
console.log(toFreud("test")) // "sex"
console.log(toFreud("This is a test")) // "sex sex sex sex"
console.log(toFreud("This is a longer test")) // "sex sex sex sex sex"
console.log(toFreud("You're becoming a true freudian expert")) // "sex sex sex sex sex sex"
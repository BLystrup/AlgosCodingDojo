// Strings To Do 1 Core Assignment

// 1. Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
function removeBlanks(str) {
    newStr = ""
    for (i=0; i<str.length; i++) {
        if (str[i] != " ") {
            newStr += str[i]
        }
        else {continue}
    }
    console.log(newStr)
}

removeBlanks(" Pl ayTha tF u nkyM usi c ")
removeBlanks("I can not BELIEVE it's not BUTTER")

// 2. Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
function getDigits (str) {
    newStr = ""
    for (i=0; i<str.length; i++) {
        if (isNaN(str[i])) {
            continue
        }
        else {newStr += str[i]}
    }
    console.log(Number(newStr))
    return Number(newStr)
}

getDigits("abc8c0d1ngd0j0!8")
getDigits("0s1a3y5w7h9a2t4?6!8?0")

// 3. Acronyms
//  Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
function acronym (str) {
    newStr = ""
    wordArr = str.split(" ")
    for (i=0; i<wordArr.length; i++) {
        if (wordArr[i][0] != undefined) {
            newStr += wordArr[i][0];
        }
    }
    console.log(newStr.toUpperCase())
    return (newStr.toUpperCase())
}

acronym(" there's no free lunch - gotta pay yer way. ")
acronym("Live from New York, it's Saturday Night!")

// 4. Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
function countNonSpaces(str) {
    sum = 0
    for (i=0; i<str.length; i++) {
        if (str[i] != " ") {
            sum++
        }
    }
    console.log(sum)
    return sum
}

countNonSpaces("Honey pie, you are driving me crazy") 
countNonSpaces("Hello world !")

// 5. Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeShorterStrings(arr, val) {
    newArr = []
    newArrInd = 0
    for (i=0; i<arr.length; i++) {
        if (arr[i].length >= val) {
            newArr[newArrInd] = arr[i]
            newArrInd++
        }
    }
    console.log(newArr)
    return newArr
}

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)


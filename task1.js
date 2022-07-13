

function findLongest (str) {
    str = str + " "
    let currentWord = ""
    let currentWordVowel = 0
    let longestWordVowels = 0
    let currentLongestWord = ""
    let i = 0
    while (i < str.length) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            currentWordVowel ++
        }
        if (str[i] === " "){
            if (currentWord.length > currentLongestWord.length){
                currentLongestWord = currentWord
                longestWordVowels = currentWordVowel
                currentWord = ""
                currentWordVowel = 0
            }
            if (currentWord.length == currentLongestWord.length && currentWordVowel > longestWordVowels){
                currentLongestWord = currentWord
                currentWord = ""
                currentWordVowel = 0
            }
            currentWord = ""
            currentWordVowel = 0
        }
        else {
            if (isLetter(str[i]))
            {currentWord = currentWord + str[i]}
        }
        i++
    }
    return currentLongestWord
}

function isLetter(char){
    return ( (char >= 'A' &&  char <= 'Z') ||
             (char >= 'a' &&  char <= 'z') );
}


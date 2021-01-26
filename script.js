

// Splits the sentence into an array and finds the longest word
const findLongestWord = () => {
    let sentence = document.getElementById('str').value;
    let words = sentence.split(' '); //WHY DOES THIS NOT WORK?
    let maxLength = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    
    console.log(sentence);
    console.log(words);
    console.log(maxLength);
    console.log(longestWord);
    return longestWord; //It appears that returns have to be after console.logs
    //return maxLength;
}


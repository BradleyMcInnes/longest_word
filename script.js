// Capture the sentence
//var sentence = "My long sentence";/*document.getElementById('str');*/

// Splits the sentence into an array and finds the longest word
function findLongestWord(str) {
    var words = str.split(' ');
    var maxLength = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    return maxLength;
    console.log(maxLength);
    console.log(longestWord);
}



// Waiting for the doc to load and then listening for the click
document.addEventListener('click', findLongestWord('my long sentence');
});

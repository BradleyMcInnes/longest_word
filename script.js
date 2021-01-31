



// Splits the sentence into an array and finds the longest word
const findLongestWord = () => {
    let sentence = document.getElementById('str').value;
    let words = sentence.split(' '); //WHY DOES THIS NOT WORK?
    let maxLength = 0;
    
    if (sentence === '' || sentence == null || isNaN(sentence) == false) {
        alert("Please enter a sentence")
    } else {
        for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
            }
        }
    
    }
    
    console.log(sentence);
    console.log(words);
    console.log(maxLength);
    console.log(longestWord);
    document.getElementById('theWord').innerHTML = "The longest word in your sentence is " + longestWord + " with "  + maxLength + " letters.";
    return longestWord; 
    return maxLength;//Nothing can be placed after the return calls
    
}

/*
const displaySen = document.getElementById('theWord').innerHTML = "The longest word in your sentence is " + longestWord + " with "  + maxLength + " letters.";

form.addEventListener('submit', (e) => {
    e.preventDefault()
})
*/
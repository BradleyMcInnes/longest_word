



// Splits the sentence into an array and finds the longest word
const findLongestWord = () => {
    let sentence = document.getElementById('str').value;
    let words = sentence.split(' '); 
    let maxLength = 0;
    
    
    if (sentence === '' || sentence == null || isNaN(sentence) == false) {
        alert("Please enter a sentence")
    } else {
        for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            var longestWord = words[i];
            }
        }
    
    }
    
    console.log(sentence);
    console.log(words);
    console.log(maxLength);
    console.log(longestWord);
    document.getElementById('theWord').innerHTML = "The longest word in your sentence is " + longestWord + " with "  + maxLength + " letters.";
    
    var requestOne = new XMLHttpRequest();
    requestOne.open('GET', 'https://api.wordnik.com/v4/word.json/' + longestWord + '/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=x3k3yryoxvkxbreilfovr15oqwfm5oczck9jtfel3yxpbf0ez', true);
    requestOne.onload = function () {
    let data = JSON.parse(this.response);
    if (requestOne.status >= 200 && requestOne.status < 400) {
        let i = Math.ceil(Math.random() * 10);
        theDefinition.innerHTML = data[i].text;
        } else {
        theDefinition.innerHTML = "Error";
        }
    }
    requestOne.send();
    //return longestWord; 
    //return maxLength;//Nothing can be placed after the return calls  
}

//const wordDefinition = document.getElementById('theDefinition').innerHTML = requestOne.send(wordToBeDefined);



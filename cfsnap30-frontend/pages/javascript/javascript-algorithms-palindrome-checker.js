import { useEffect } from 'react';
import Link from "next/link";

function javascriptAlgorithmsPalindromeChecker() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Algorithms: Palindrome Checker</h2>
                <p>
                As I prepare for Javascript development interviews I've been reviewing various online articles and resources about different algorithms I'll likely get asked about. 
                Turns out that these things are actually pretty fun exercises and while I was able to do some of them all by my lonesome, others required some documentation lookups and Googling. 
                Like any development problem there are likely multiple good solutions but the ones I present here are probably the most direct and obvious - feel free to solve differently and generate your own solution.</p>
<p style={{fontStyle: "italic"}}>Write a solution in Javascript where, if I give you a string of text, your code will verify if it's a palindrome or not. For example, if I provide "civic" your solution will return "Yes", or true.
</p>
<p>USAGE: Copy and paste the code samples below into the Javascript console in your browser (including the companies and/or ages arrays), then simply hit return on your keyboard to see the code in action.</p>

            </div>

            <div className="container">    	
<pre><code>{`//Palindrome code
//declare variables that I'll need 
var word = "civic"; 
//HARD CODE YOUR STRING TO TEST HERE
var start = 0;
var end = word.length-1; 
var noPal = 0;
var yesPal = 0;

//the loop: over the number of chars in the string. 
//set start to the current iterator, 
//set end to current iterator minus 2
for (i=0; i < word.length; i++) {
    start = i;
    end = (word.length-i)-1;

    //does first char match the last? 
    //does 2nd char match 2nd to last? 
    //and so on....keep score 
    if (word.charAt(start) === word.charAt(end)) {
        yesPal = yesPal+1;
    } else {
        noPal = noPal+1;
    }
}; 

//if noPal score is greater 0, 
//there was at least one char mismatch, 
//so NO PAL. Else, we're good!
noPal > 0 ? console.log('NO PALINDROME') 
:console.log('YES PALINDROME') ; 

/*...so I wrote the above code from 
scratch with no outside help, and felt 
pretty good about 
myself. Then I checked the scotch.io 
course and wouldya look what those 
nerds came up with!?!?!*/

function palindromeChecker(text) {
    var reversedText = text.toLowerCase()
        .split('').reverse().join('')
    return text === reversedText 
    /*their fancy-smancy code 
    returns a boolean. 
	Cool, efficient, yet lazy....*/
}

console.log(palindromeChecker('bob'));
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptAlgorithmsPalindromeChecker

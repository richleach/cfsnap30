import { useEffect } from 'react';
import Link from "next/link";

function javascriptAlgorithmsCountTheVowels() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Algorithms: Count The Vowels</h2>
                <p>
                As I prepare for Javascript development interviews I've been reviewing various online articles and resources about different algorithms I'll likely get asked about. 
                Turns out that these things are actually pretty fun exercises and while I was able to do some of them all by my lonesome, others required some documentation lookups and Googling. 
                Like any development problem there are likely multiple good solutions but the ones I present here are probably the most direct and obvious - feel free to solve differently and generate your own solution.</p>
<p style={{fontStyle: "italic"}}>Write a solution in Javascript where, if I give you a string of text your solution will return the number of vowels contained in your string. For example if I provide, "abcde" your solution will return 2.</p>

            </div>

            <div className="container">    	
<pre><code>{`//COUNT THE NUMBER OF VOWELS
const vowels = ["a", "e", "i", "o", "u"];

function vowelCounter(text) {
  let counter = 0;
  for (let char of text.toLowerCase()) {
    //loop over submitted text, if the group of 
    //vowels contains the current char, add 1 to counter
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}

console.log(vowelCounter("algorithm"));

/*
 Using Regular Expressions to count 
 the number of vowels in a string of text.
 */

function vowelsCounter(text) {
  // Search text with Regex and 
  //store all matching instances
  let matchingInstances = text.match(/[aeiou]/gi);

  // Check if matching instances exist 
  //then calculate length
  if (matchingInstances) {
    // Return number of vowels
    return matchingInstances.length;
  } else {
    return 0;
  }
}

console.log(vowelsCounter("abracadabra"));
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptAlgorithmsCountTheVowels

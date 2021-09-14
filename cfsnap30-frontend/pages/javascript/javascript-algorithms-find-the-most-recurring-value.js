import { useEffect } from 'react';
import Link from "next/link";

function javascriptAlgorithmsFindTheMostRecurringValue() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Algorithms: Find the Most Recurring Value</h2>
                <p>
                As I prepare for Javascript development interviews I've been reviewing various online articles and resources about different algorithms I'll likely get asked about. 
                Turns out that these things are actually pretty fun exercises and while I was able to do some of them all by my lonesome, others required some documentation lookups and Googling. 
                Like any development problem there are likely multiple good solutions but the ones I present here are probably the most direct and obvious - feel free to solve differently and generate your own solution.</p>
<p style={{fontStyle: "italic"}}>Write a solution in Javascript where, if I give you a string of letters you'll return the one character that occurs the most in that string. For example, if I provide "abca" your solution will return "a".</p>

            </div>

            <div className="container">    	
<pre><code>{`//FIND THE MOST RECURRING CHARACTER IN A STRING
//character mapping comes in handy here.... 
function maxRecurringChar(text) {
    let charMap = {}  
    //create an empty object to hold each char's 
    //value and number of occurrences
    let maxCharValue = 0 
    //used when it's time to find each char's 
    //number of occurrences
    let maxChar = '' 
    //will hold the actual char used the 
    //most in the submitted string

    for (let char of text) {  
        //loop over each character in the submitted text
        if (charMap.hasOwnProperty(char)) {  
            //if this character is already in the 
            //charMap then add 1....
            charMap[char]++
        } else {  
            //...otherwise create it in the 
            //charMap and set it's value to 1
            charMap[char] = 1
        }
    }

//now loop over the charMap and 
//tabulate recurrence of each character
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) { 
            //if the current char occurs more 
            //than the maxCharValue....
            maxCharValue = charMap[char]  
            //then set the maxCharValue equal 
            //to the char being evaluated
            maxChar = char  
            //and store the actual char in here
        }
    }

    return maxChar
}

console.log(maxRecurringChar('text'));
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptAlgorithmsFindTheMostRecurringValue

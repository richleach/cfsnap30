import { useEffect } from 'react';
import Link from "next/link";

function javascriptAlgorithmsReversingAString() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Algorithms: Reversing a String</h2>
                <p>
                As I prepare for Javascript development interviews I've been reviewing various online articles and resources about different algorithms I'll likely get asked about. 
                Turns out that these things are actually pretty fun exercises and while I was able to do some of them all by my lonesome, others required some documentation lookups and Googling. 
                Like any development problem there are likely multiple good solutions but the ones I present here are probably the most direct and obvious - feel free to solve differently and generate your own solution.</p>
<p style={{fontStyle: "italic"}}>Write a solution in Javascript where, if I give you a string of text your solution will return that same string but in reverse order. For example if I provide, "abcd" your solution will return "dcba".</p>

            </div>

            <div className="container">    	
<pre><code>{`//REVERSE A STRING OF TEXT
function reverseString(text) {
  return text
    .split("") 
    //breaks up the string into an array
    .reverse() 
    //reverses the order of an array
    .join(); 
    //reassembles the parts to return
}
console.log(reverseString("algorithm"));

function reverseString2(text) {
  let result = ""; 
  //set the result variable

  for (let char of text) {
    //loop through the submitted text string
    result = char + result; 
    //concatenate current iterator in front 
    //of current result set
  }
  return result;
}
console.log(reverseString2("algorithm"));
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptAlgorithmsReversingAString

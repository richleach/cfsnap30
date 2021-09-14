import { useEffect } from 'react';
import Link from "next/link";

function reactBasicsCustomHooks() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Poker Hand Interview Question</h2>
                <p>Being a contractor I interview a lot, and while I'd love to say that I "ace" every interview, I just don't. As a matter of fact I recently bombed one but good, and felt pretty bad about it. The interviewer gave me the following exercise: <hr /><br />
This string is meant to represent a common poker hand:<br />

"As 10c 9h 2d 10s" <br />

...where there are 5 cards, space delimited. Each card's first character(s) is the rank and the last character is the card's suit (in this example, the card "10c" is the 10 of Clubs card; "As" is the Ace of Spades; "2d" is the 2 of Diamonds, etc.)<br />
I had an hour to code a solution to where I would look at (loop over) the cards in my hand and determine if I had a pair, 3 of a kind, 4 of a kind, etc. If I had time I could then work on the cards suit(s) to look at determining flushes, full houses, etc.<br /><br /><hr />
My problem with this? I don't play poker, never have, and I think that caused a little anxiousness which I wasn't able to overcome during the interview (I didn't know what a "flush" was, even though there was some reference available.... I know, silly right?!) But in an interview - especially if the interview is for new(er) technology - you just feel that pressure a little bit more than usual. I was able to infer that of all the Javascript data structures that I wanted to use an object would work well, that I'd have to loop over and split the individual cards into rank/suit (but do it from the end of the card, since a card's rank could be 1 or 2 digits "As" (Ace of Spades - 2 digits) vs "10d" (10 of Diamonds - 3 digits)). In truth I actually got a fair amount of code down on the screen (that's another thing, they sat me right down in front of a computer, no white board or even scratch paper to stub out my logic.... I don't ever just sit down and start coding, it never ends well!)<br />

In the end the company said "no thanks" and I don't blame them, but since I hate to lose I actually sat down and wrote out the solution. It ain't pretty, and it also took me over 2 hours but at least now I feel better about the solution and showed, if to nobody else but me, that I could write the code.<br />

Copy and paste the code below into your browser's Javascript console.</p>
                

            </div>

            <div className="container">    	
<pre><code>{`//this is the "hand" 
//we were dealt; the first letter/number 
//is the card's rank, the 
//single letter is the card's suit 
//(s=spades, c=clubs, h=hearts, d=diamonds)
const hand = 'As 10c Ah 2d 10s';

//have to split the string into an array...
const arrHand = hand.split(' ');

//declare a few variables 
//(we'll fill these buckets 
//in a second....)
let rank;
let suit;
let sortedHand = {};

const suits = 
arrHand.forEach(e => {
	//have to determine card 
    //length because of 1 and 
    //2 digit ranks, but always
	//a one character suit
	let cardLength = e.length;
	if(cardLength == 2){
		var rank = e.slice(0,1); 
        //using var on purpose 
        //so the variable is 
		//available 
		//to our if/else below. 
        //Slicing based on 1 or 
        //2 digit rank
	} else {
		var rank = e.slice(0,2);
	}
		var suit = e.slice(-1); 
        //we may need the suit 
        //later on....

	if(!sortedHand[rank]) { 
    //if this card's rank isn't 
    //already in the hand, 
	//then add it to the sort
	   sortedHand[rank]=e;
	   }
	else{ 
    //if this card's rank IS 
    //already in the hand, 
    //add it on the end 
	//of that rank but 
    //pipe delimited
		sortedHand[rank]=sortedHand[rank]+'|'+e
	}
	
})

const showCards = 
Object.entries(sortedHand) 
//easier to loop through 
//JS objects using 'entries'

showCards.forEach((c) => 
{//looping through each rank
	replaced=c[1].replace(/'|'/g, ', '); 
    //replace the pipe with a comma 
    //for presentation
	cardCount=c[1].split('|'); 
    //split up the rank if 2, 3 
    //or 4 of a kind exists
	console.log('The ' + {c[0]} + 
    ' card: ' + '{cardCount} ( 
        ' + {cardCount.length} + 
        'of a kind)'); 
        //output 
	//results to the screen
})`}
</code></pre>

            </div>
        </div>

        )
    }    

export default reactBasicsCustomHooks

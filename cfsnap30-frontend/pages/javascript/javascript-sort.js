import { useEffect } from 'react';
import Link from "next/link";

function javascriptSortMethod() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Sort Method</h2>
                <p>
                Here's how to sort (and reverse sort) an array of values.
                </p>
               
                <p>
                USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.    
                </p>
            </div>

            <div className="container">    	
<pre><code>{`//sort actually sorts the values in 
//an array, typical usage is to assign 
//incoming values as "a" and "b"
const ages = 
[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
const agesSort = ages.sort((a,b) => a-b);
console.log(agesSort);

//reverse works nicely too
const agesRev = ages.reverse(); 
console.log(agesRev);
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptSortMethod

import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function usefulCssSnippetsAnchors() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>CSS Useful CSS Snippets</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/css/">Return to posts</Link></div>
                <h2>CSS: Useful CSS Snippets - Good To Know</h2>
                <p>
                ...'some more CSS goodness....                </p>
                <h4>Useful CSS Snippets: Anchors</h4>
                <p>The anchor &lt;a&gt; tag is pretty important to the web community and so is the ability to unload as much burden from your server side code as possible. The CSS code below will help you apply some minimal logic and possibly some cool effects to your page's links and anchors.<br />
                INSTRUCTIONS: Copy the CSS and the HTML code below into your .css and .html files, respectively.
                </p>
                <h4>a:hover</h4>
                <p>I use this all the time but assuredly forget it just as often. (I'll just add "mouseover" and "highlight" for the search engines....)</p>
            </div>

            <div className="container">    	
<pre><code>{`CSS:
a:hover {
    border: thin solid red;
}
/* Don't forget these! */
a:active {
    color:lightgrey;
}
a:visited {
    color:grey;
}
a:link {
    color:silver;
}


HTML:
<a href="http://www.google.com/someMadeUp.jpeg">http://www.google.com/someMadeUp.jpeg</a>
<a href="http://www.google.com/someMadeUp.jpg">http://www.google.com/someMadeUp.jpg</a>
`}
</code></pre>
        <br />
        <h4>a[title]</h4>
        <p>Use this code to put a title attribute (aka attributes selector) in your HTML and the following link will be displayed as pink:</p>

        <pre><code>{`CSS:
a[title]{
 color: pink;   
}

HTML:
<a href="#" title="My Test Title">This is my pink test title link.</a>
`}
</code></pre> 
<br />
    <h4>a[href$=".png"]</h4> 
    <p>Here's a little regEx goodness - use the "$" to refer to the end of the string in the search. So let's say you want to apply some green to all .jpeg image file links:</p>      
    <pre><code>{`CSS:
a[href$=".jpeg"]{
 color: green;   
}

HTML:
<a href="http://www.google.com/someMadeUp.jpeg">http://www.google.com/someMadeUp.jpeg</a>
<a href="http://www.google.com/someMadeUp.jpg">http://www.google.com/someMadeUp.jpg</a>   
`}
</code></pre> <br /> 
<h4>a[data-filetype="image"] and the HTML data attribute</h4> 
<p>Sort of like the snippet above, but you can add 'data-filetype="image"' to the anchor tag and gain CSS level control to all of your image links.</p>        
<pre><code>{`CSS:
a[data-filetype="image"]{
 font-size: 32px;   
}

HTML:
<a href="http://www.google.com/someMadeUp.jpeg" data-filetype="image">http://www.google.com/someMadeUp.jpeg</a>
<a href="http://www.google.com/someMadeUp.jpg" data-filetype="image">http://www.google.com/someMadeUp.jpg</a>
<a href="http://www.google.com/someMadeUp.gif" data-filetype="image">http://www.google.com/someMadeUp.gif</a>
<a href="http://www.google.com/someMadeUp.png" data-filetype="image">http://www.google.com/someMadeUp.png</a> 
`}
    </code></pre>
            </div>
        </div>
    
        )
    }    

export default usefulCssSnippetsAnchors

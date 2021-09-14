import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function usefulCssSnippets() {
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
                I seem to use the following CSS frequently, so I started this hot-list to make my lookups easier instead of searching the web. While I'd love to take credit for all of these snippets I didn't actually come up with them; necessity lead me to them elsewhere on the web and I just can't remember to whom I should give credit.... 
                </p>
                <h4>Useful CSS Snippets: Good To Know</h4>
                <p>Utilitarian in nature, hopefully time saving, or just maybe you'll solve a problem that no one else could, and give yourself a reason to stand tall with your knuckles on your hips, elbows flaring....<br />
                INSTRUCTIONS: Copy the CSS and the HTML code below into your .css and .html files, respectively.
                </p>
                <h4>CSS :not() Selector</h4>
                <p>I'm bringin' it heavy right out the gate with this one.... Let's say you want to color all of the &lt;p&gt; tags except those that have a class of .potatoe. Do this:</p>
            </div>

            <div className="container">    	
<pre><code>{`CSS:
p:not(.potatoe) {
    background: #ff0000;
}

HTML:
<p>
    one potatoe
</p>
<p>
    two potatoe
</p>
<p>
    three potatoe
</p>
<p class="potatoe">
    four
</p>
`}
</code></pre>
        <br />
        <h4>Alternating background colors for row data</h4>
        <p>Take some of the burden off of your server side code and use this CSS instead to alternate row colors for data output:</p>

        <pre><code>{`CSS:
li:nth-child(odd){
   background:pink;
}

li:nth-child(even){
   background:silver;
}

HTML:
<ul>
    <li>List item 1, with alternating background</li>
    <li>List item 2, with alternating background</li>
    <li>List item 3, with alternating background</li>
    <li>List item 4, with alternating background</li>
    <li>List item 5, with alternating background</li>
</ul>
`}
</code></pre> 
<br />
    <h4>Formatting the rows for row data</h4> 
    <p>... running with the above example you'll likely want to apply some formatting - borders, padding, etc. - to the first and last rows in your output. Easy, just use li:first-child and li:last-child.</p>      
    <pre><code>{`CSS:
ul li:first-child{
   border-top:thin solid silver;
}

ul li:last-child{
   border-bottom:thin solid silver;
}

HTML:
<ul>
    <li>List item 1, with alternating background</li>
    <li>List item 2, with alternating background</li>
    <li>List item 3, with alternating background</li>
    <li>List item 4, with alternating background</li>
    <li>List item 5, with alternating background</li>
</ul>

        `}
</code></pre> <br /> 
<h4>Decorating Special Links</h4> 
<p>I think I needed this when I was looking to dynamically highlight links from my site to my sponsors. The code below will dynamically apply when cfsnap appears anywhere in the anchor tag (thanks to the wildcard (*)). A handy way to cover subdomains in the links.</p>        
<pre><code>{`CSS:
a[href*="cfsnap"]{
   font-weight:700;
}

HTML:
   <a href="http://www.cfsnap.com">Go to CFSNAP.com</a>
   <a href="blog.cfsnap.com/css">Go to CFSNAP.com's blog</a>
    `}
    </code></pre>
            </div>
        </div>
    
        )
    }    

export default usefulCssSnippets

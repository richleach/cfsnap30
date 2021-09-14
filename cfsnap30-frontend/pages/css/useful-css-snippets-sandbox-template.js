import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function CssGridLayoutImageSpan() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <Head>
                <title>CSS Sandbox template</title>
            </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/css/">Return to posts</Link></div>
                <h2>CSS: Useful CSS Snippets - Sandbox template</h2>
                <p>
                When I'm working on an advanced CSS issue and want to get grounded I'll break out a concept or two into its own file for testing. 
                </p>
                <p>INSTRUCTIONS: Copy and paste the code below into it's own .html file. I know, I know... don't ever deploy this crappy code into production, it's just a quick and dirty sandbox to validate a little CSS in your HTML.</p>
            </div>

            <div className="container">    	
<pre><code>{`<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>SANDBOX</title>
        
        <style type="text/css">
            /*CSS rules go here! */
        </style>
    </head>
    <body>

    </body>
</html>

`}
</code></pre>

            </div>
        </div>

        )
    }    

export default CssGridLayoutImageSpan

import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsSnippets2() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: ...more React Snippets</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
                <h2>React Basics: Snippets 2</h2>
            <p>App.js with the following:</p>
                <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
                    <li>Import the Greeting component</li>
                    <li>Passing values to the component via props</li>
                    <li>Setting default values making the passing of props data optional</li>
                </ul>

                <h4>App.js</h4>
            </div>

            <div className="container">    	
<pre><code>{`import React from 'react';
import Greeting from './components/Greeting';

function App() {

  return (
    <div>
      <header>
        <Greeting name="Rich" excitement={3}/>
        <Greeting name="Dave" age="31"/>
      </header>
    </div>
  );
}

export default App;`}
</code></pre>
<br /><br />

<h4>Greeting.js - Imported Component</h4>
    <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
        <li>Default prop values, use of prop values in component</li>
    </ul>            	
<pre><code>{`import React from 'react';

function Greeting({name, age = 22, excitement=1}) {
  
  return (
    Hello there {name}. You are {age} years old. 
    Excitement score is {excitement} 
    {"!".repeat(excitement)}
  );
}

export default Greeting; `}
</code></pre>


            </div>
        </div>

        )
    }    

export default reactBasicsSnippets2

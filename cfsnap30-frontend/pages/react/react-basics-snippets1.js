import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsSnippets1() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: React Snippets</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
                <h2>React Basics: Snippets 1</h2>
            <p>App.js: State/Events/Arrow functions (inline)</p>
                <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
                    <li>useState() for tracking the ever popular counter application</li>
                    <li>Use of an inline arrow function during an onClick event, as well as calling a function</li>
                    <li>Displaying, and resetting a value stored in state</li>
                </ul>

                <h4>App.js</h4>
            </div>

            <div className="container">    	
<pre><code>{`import React from 'react';

function App() {
  const [count, setCount] = React.useState(0); 
    
  function increment() {
      setCount(() => count + 1)
  }  
  /* function decrement() {
      setCount(() => count - 1)
  } */ 

  return (
    <div>
      <header>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => {setCount(() => count-1)}}>Decrement</button>
      </header>
    </div>
  );
}

export default App;`}
</code></pre>
<br /><br />

            </div>
        </div>

        )
    }    

export default reactBasicsSnippets1

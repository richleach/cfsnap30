import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsUseStateHook() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: useState Hook</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
            <h2>React Basics: useState Hook</h2>
            <p>The useState hook is used in functional components in order to use state (whereas state was once only available to class components).</p>
            <h4>App.js </h4>
            
            </div>

            <div className="container">    	
<pre><code>{`import React, {useState} from "react"

function App() {
    const [count, setCount] = useState(0) 
    const [answer, setAnswer] = useState("Yes")
	// whatever var you set a state hook for
    // the convention is to set it's 
    // corresponding setVar 
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>
                Increment</button>
            <button onClick={decrement}>
                Decrement</button>
        </div>
    )
}

export default App
`}
</code></pre><br />


      

    
            </div>
        </div>

        )
    }    

export default reactBasicsUseStateHook

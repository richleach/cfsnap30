import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsUseEffectHook() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: useEffect Hook</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
            <h2>React Basics: useEffect Hook</h2>
            <p>Use case: You have a function you want called whenever the component mounts (only once, when the page loads) or you want that same function to run everytime an event fires on that page (always).

The useEffect hook allows a functional component to tap into lifecycle methods and other side effects in functional components like network requests, setting up event listeners and timeouts & intervals.
</p>

            <h4>App.js (Basic useEffect Explained)</h4>
            
            </div>

            <div className="container">    	
<pre><code>{`import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor" 
/*random hex color library, you'll 
need to install it first!*/

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    function increment() {
        setCount(prevCount => 
        prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => 
        prevCount - 1)
    }
    
    useEffect(() => {
        setColor(randomcolor())  
        /*setColor calls randomcolor 
        function and puts it into state 
		thanks to useState hook*/
    }, [count]) /*this second attribute 
    says which event(s) to listen for to 
    run the included function. If blank, 
    it will just run once when 
    loading and that's it*/
    
    return (
        <div>
            <h1 style={{color: color}}>
                {count}</h1>
            <button onClick={increment}>
                Increment</button>
            <button onClick={decrement}>
                Decrement</button>
        </div>
    )
}

export default App`}
</code></pre><br />


<h4>App.js (useEffect Lifecycle Hooks Explained)</h4>
<pre><code>{`import React, {useState, 
    useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    useEffect(() => {
        const intervalId = 
        setInterval(() => {
            // setCount(
                prevCount => 
                prevCount + 1)
        }, 1000)
        return () => 
        clearInterval(intervalId) 
        /*by adding this "cleanup method"
        this is equivalent of 
        componentDidUnmount */
    }, [])
    
    useEffect(() => {
        setColor(randomcolor())
    }, [count]) //equivalent of 
    componentDidUpdate lifecycle method
	
	useEffect(() => {
        setColor(randomcolor())
    }, []) //equivalent of 
    componentDidMount lifecycle method
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
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

export default reactBasicsUseEffectHook

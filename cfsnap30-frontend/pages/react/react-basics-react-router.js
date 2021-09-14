import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsReactRouter() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <Head>
                <title>React Basics: React Router</title>
            </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
            <h2>React Basics: React Router</h2>
            <p>Use case: Your SPA needs links that, when clicked, work just like any web page would; the clicked link takes the user to that page. Or, more accurately, the clicked link causes the SPA to replace the current component with the clicked component.</p>

            <h4>App.js</h4>
            <p>If you put the React router Switch/Route code in the App.js file then the clicked link replaces the current component with the clicked component. (...vs putting the specific Switch/Route code on an interior component, thus displaying the clicked component onto the current component).</p>
            </div>

            <div className="container">
<pre><code>{`import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import Info from "./pages/profile/Info"
import Settings from "./pages/profile/Settings"  
//don't forget that you need to import the components 
//into the file containing the Switch/Route code

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
    <div>
        <Header />
        
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route path="/profile/info">
                <Info/>
            </Route>
            <Route path="/profile/settings">
                <Settings/>
            </Route>
        </Switch>
        
        <Footer />
    </div>
    )
}

export default App`}
</code></pre>

            </div>
        </div>

        )
    }    

export default reactBasicsReactRouter

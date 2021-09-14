import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsMasterDrilldown() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: Master Drilldown Structure</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
            <h2>React Basics: Master Drilldown</h2>
            <p>Use case: Your application (SPA) needs a master page, like a category page with a bunch of products listed - let's say you did a search for "donuts" and you got a page with all of the available donuts listed. This is the master page.
When you click on a donut link, React will use the useParams hook to pass the clicked value from the URL down to the details page where a lookup will be performed and all of the details for that specific donut will be displayed.</p>
                

                <h4>App.js</h4>
                <p>If you put the React router Switch/Route code in the App.js file then the clicked link replaces the current component with the clicked component. (...vs putting the specific Switch/Route code on an interior component, thus displaying the clicked component onto the current component). The magic however is on the route path for the ServiceDetail link - the ":serviceId" is our _id value from the servicesData.js file and that gets assembled and passed down from the ServicesList.js file.</p>
            </div>

            <div className="container">    	
<pre><code>{`import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import ServicesList from 
"./pages/services/ServicesList"
import ServiceDetail from 
"./pages/services/ServiceDetail"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route path="/services/:serviceId" >
                    <ServiceDetail />
                </Route>
            </Switch>
        </div>
    )
}

export default App`}
</code></pre>
<br /><br />

<h4>Header.js</h4>
<p>A simple header section with the included links to home and services (services actually goes to the master page).</p>         	
<pre><code>{`import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
        </ul>
        </header>
    )
}

export default Header`}
</code></pre>
<br /><br />

<h4>Home.js</h4>
<p>A simple home page, for the purposes of illustration.</p>         	
<pre><code>{`import React from "react"

function Home() {
    return (
        <h1>Home Page</h1>
    )
}

export default Home`}
</code></pre>
<br /><br />

<h4>ServicesList.js</h4>
<p>A simple list page for all of the services listed in this catalog. React sets up the drilldown page here with the link tag incorporating the "_id" value, which is parsed out using the .map method. Also, don't forget the key value in the iterator otherwise React will throw a warning!</p>         	
<pre><code>{`import React from "react"
import servicesData from "./servicesData"
import {Link} from "react-router-dom"

function ServicesList() {
    const services = servicesData.map(service => (
    <h3 key={service._id}>
        <Link to={'/services/{$}{service._id}'}>
        {service.name}</Link> - {$}{service.price}
    </h3>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList`}
</code></pre>
<br /><br />

<h4>ServicesData.js</h4>
<p>The dummy data, json formatted, for the drilldown page display.</p>         	
<pre><code>{`export default [
{
    "name": "Lawn Mowing",
    "price": 30,
    "_id": "1",
    "description": 
    "Have a carpet-like lawn without any work."
},
{
    "name": "Leaf Raking",
    "price": 50,
    "_id": "2",
    "description": 
    "Remove those pesky dead tree parts."
},
{
    "name": "Weeding",
    "price": 50,
    "_id": "3",
    "description": 
    "Don't let the invaders ruin your yard."
},
{
    "name": "Sprinkler repair",
    "price": 100,
    "_id": "4",
    "description": 
    "Keep your irrigation system top-notch."
}
]`}
</code></pre>
<br /><br />

            </div>
        </div>

        )
    }    

export default reactBasicsMasterDrilldown

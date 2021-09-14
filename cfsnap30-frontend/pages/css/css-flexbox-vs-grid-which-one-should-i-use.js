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
            <title>CSS Flexbox vs. Grid - Which One Should I Use</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/css/">Return to posts</Link></div>
                <h2>CSS: Flexbox vs Grid - Which One Should I Use?</h2>
                <p>
                When I first discovered Bootstrap years ago I was pretty excited about how much that framework empowered my front end developer inner-child. A lot of us developers had written our own frameworks - and were proud of them, so we shared them - but quickly lamented the effort involved in maintaining, patching and responding to browser updates. 12 columns, mobile ready, consistent stying.... Bootstrap felt natural. A little too natural.... 
                </p>
                <p>
                Not long after feeling all that goodness I thought (quietly), "Why doesn't the browser just do this?"
                </p>
                <p>
                I get it, when I worked at Microsoft I got a first hand look at some of that browser code, and it has a heavy load to lift, no question about it. And sure enough, Twitter's Bootstrap spawned other front end frameworks (Foundation, Semantic, that Yahoo library....), so now during interviews I had to be aware of yet other frameworks and possibly work with/against/for them.
                </p>
                <p>
                I appreciated Bootstrap's grid system, all of those helper classes and it's affinity towards the mobile platform. But no matter what project I used Bootstrap for it seemed I was always gutting the styles (nobody wanted someone to look at their new site creation and immediatley respond with, "I see you used Bootstrap....") and just running with the core so that I could build out my project from there.  
                </p>
                <p>
                I liked, and continue to like Bootstrap so don't send me any hate mail (you'll hurt my feelings). Remember, if you ask 10 developers what their favorite framework is, you'll get 11 answers (they're not always good at math....) But I silently kept asking myself, "when will the browsers just do these Bootstrap-esque things?"  
                </p>
                
                <p>With Flexbox and Grid, the browser now "just does it", better than a Nike commercial. I have my grids, page level layouts, component level layouts, progressive page layout support - all without having to add any additional Javascript libraries to my pages, the browser just does it. Yeah I'm a happy guy. And it's really easy to use too. The following long-winded example shows what I really dig about Grid so far. For giggles you can copy everything below and paste it into a blank html page. Save and load into your browser.</p>
            </div>

            <div className="container">    	
<pre><code>{`<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>NEWRICH</title>

<style>
body{
	color:white;
	text-align:center;	
}

#content{
		display:grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(100px;auto);
		max-width:960px;
		margin:0 auto;
		grid-gap:10px;
		grid-template-areas:
		"header header header header header header header header header header header header"
		"nav nav nav nav nav nav nav nav nav nav nav nav"
		"main main main main main main main main main main main main"
		"main main main main main main main main main main main main"
		"aside aside aside aside aside aside aside aside aside aside aside aside"
		"footer footer footer footer footer footer footer footer footer footer footer footer";
	}

@media screen and (min-width:760px){
	#content{
		display:grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(100px, auto);
		max-width:960px;
		margin:0 auto;
		grid-gap:10px;
		grid-template-areas:
		"header header header header header header header header header header header header"
		"nav nav nav nav nav nav nav nav nav nav nav nav"
		"aside main main main main main main main main main main main"
		"aside main main main main main main main main main main main"
		"footer footer footer footer footer footer footer footer footer footer footer footer";
	}
}

#content > * {
	background:#3bbced;
	padding:10px;
}

aside{
	grid-area:aside;	
}

header{
	grid-area:header;	
	}
nav{
	grid-area:nav;	
}
main{
	grid-area:main;	
}
footer{
	grid-area:footer;
}

/*flex CSS here */
headerNav {
    display:flex;
}  

headerNav > div {
    padding-left:10px;
}
headerNav > div:nth-child(3) {
    margin-left:auto;
}   
 
</style>
</head>

<body>
	<div id="content">
		<aside> Aside </aside>
		<header>
            <headerNav>
                <div> Home </div>
                <div> Search </div>
                <div> Contact </div>
            </headerNav>
        </header>
		<nav> Nav </nav>
		<main> Main </main>
		<footer> Footer </footer>
	</div>
</body>
</html>

`}
</code></pre>

            </div>
        </div>

        )
    }    

export default CssGridLayoutImageSpan

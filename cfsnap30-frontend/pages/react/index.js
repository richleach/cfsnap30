import Link from "next/link";
import Head from 'next/head';
import ReactBlogPageList from '@/components/ReactBlogPageList'

function index() {
    return (
        <div className="docs-main my-4">
            <Head>
            <title>React Summary Page: React Blog Listings</title>
          </Head>
            <div className="container grid">
                <div className="card menu bg-light p-1">
                    <h3 className="my-2">React Posts</h3>
                    <ReactBlogPageList />
                </div>
                <div className="card">
                    <h2>React</h2>
                    <p>I've worked with Angular for about 2 years, dabbled in Vue.js, but now I call React 'home'. I liked it so much I rewrote my personal site <a href="http://www.richleach.com" target="_blank">richleach.com</a> in React and even rewrote this site using Next.js, finally retiring Coldfusion.</p>

                    <h3>I finally guessed correctly....</h3>
                    <p>Recently I discovered the site <a href="http://stateofjs.com" target="_blank">stateofjs.com</a>, a great site with lots of usage and adoption data about Javascript and all of its flavors, libraries, frameworks, tools and opinions. As of late React is one of the most beloved frameworks, above Vue.js and well above Angular (whose popularity continues to slide year after year). So I feel fortunate to have been drawn to such a popular framework/language with a growing user base and expanding popularity.</p>

                    <h3>List of postings on the left</h3>
                    <p>Like everything else on my site all of my code is in place so that I can easily grab it and go code - the most common snippets that I tend to use but often forget (or fat-finger). As always drop me a line with any suggestions, corrections, comments or good jokes.</p>

                </div>
            </div>
        </div>
    )
}

export default index

import Link from "next/link";
import Head from 'next/head';
import JavascriptBlogPageList from '@/components/JavascriptBlogPageList'

function index() {
    return (
        <div className="docs-main my-4">
        <Head>
            <title>Javascript Blog Posts and Code Snippets</title>
          </Head>
            <div className="container grid">
                <div className="card menu bg-light p-1">
                    <h3 className="my-2">Javascript Posts</h3>
                    <JavascriptBlogPageList />
                </div>
                <div className="card">
                    <h2>Javascript</h2>
                    <p>There's a lot to learn about Javascript, and once you get the basics of the language down... WHAM! Now you have to go pick a framework - Angular, React, Vue.js.... and you won't likely just learn one of them either. </p>
                    <p>I hate writing code more than once, so enjoy this modest library of code snippets, algorithms and files that I authored at some point and dare not forget.</p>

                </div>
            </div>
        </div>
    )
}

export default index

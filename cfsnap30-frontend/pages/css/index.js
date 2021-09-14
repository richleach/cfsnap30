import Link from "next/link";
import CssBlogPageList from "@/components/CssBlogPageList";
import Head from 'next/head';

function index() {
    return (
        <div className="docs-main my-4">
        <Head>
            <title>CSS Posts - Code and Snippets For You to Use</title>
          </Head>
            <div className="container grid">
                <div className="card menu bg-light p-1">
                    <h3 className="my-2">CSS Posts</h3>
                    <CssBlogPageList />
                </div>
                <div className="card">
                    <h2>CSS</h2>
                    <p>I was in a Visual Basic workshop at Microsoft in Redmond, WA in 1997 when the instructor explained these things called "Cascading Style Sheets", and since I'd been working with style sheets in desktop publishing and QuarkXPress at the time I immediately realized their value and the way they would change web page development. Little did anyone know how much the CSS standard would grow and morph into what it is today.</p>
                    <p>You won't find any HTML table tic-tac-toe layouts here, but when I remember I'll post CSS code that helped me solve a problem, or maybe it just looks cool....</p>
                </div>
            </div>
        </div>
    )
}

export default index

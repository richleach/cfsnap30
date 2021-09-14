import Link from "next/link"

const blogList = [
    {
        "id": 1001,
        "post": "Javascript Node.js Basic Node App",
        "url": "javascript/javascript-node-js-basic-node-app/"
    },
    {
        "id": 1002,
        "post": "Javascript Poker Hand Interview Question",
        "url": "javascript/javascript-poker-hand-interview-question/"
    },
    {
        "id": 1003,
        "post": "Javascript Code Cheat Sheet",
        "url": "javascript/javascript-code-cheat-sheet/"
    },
    {
        "id": 1004,
        "post": "Javascript Higher Order Functions",
        "url": "javascript/javascript-higher-order-functions/"
    },
    {
        "id": 1005,
        "post": "Javascript Maps, Sets, WeakMaps and WeakSets",
        "url": "javascript/javascript-maps-sets-weakmaps-weaksets/"
    },
    {
        "id": 1006,
        "post": "Javascript Design Patterns - Singleton",
        "url": "javascript/javascript-design-patterns-singleton/"
    },
    {
        "id": 1007,
        "post": "Javascript Algorithms: Palindrome Checker",
        "url": "javascript/javascript-algorithms-palindrome-checker/"
    },
    {
        "id": 1008,
        "post": "Javascript Algorithms: Capitalize First Letter of Each Word In a Sentence",
        "url": "javascript/javascript-algorithms-capitalize-first-letter-of-each-word-in-a-sentence/"
    },
    {
        "id": 1009,
        "post": "Javascript Algorithms: Number of Days Between Two Dates",
        "url": "javascript/javascript-algorithms-number-of-days-between-two-dates/"
    },
    {
        "id": 1010,
        "post": "Javascript Algorithms: Find The Most Recurring Value",
        "url": "javascript/javascript-algorithms-find-the-most-recurring-value/"
    },
    {
        "id": 1011,
        "post": "Javascript Algorithms: Count the Vowels",
        "url": "javascript/javascript-algorithms-count-the-vowels/"
    },
    {
        "id": 1012,
        "post": "Javascript Algorithms: Reversing a String",
        "url": "javascript/javascript-algorithms-reversing-a-string/"
    },
    {
        "id": 1013,
        "post": "Javascript Asynchronous Operations",
        "url": "javascript/javascript-asynchronous-operations/"
    },
    {
        "id": 1014,
        "post": "Javascript Map Method",
        "url": "javascript/javascript-map-method/"
    },
    {
        "id": 1015,
        "post": "Javascript Filter Method",
        "url": "javascript/javascript-filter/"
    },
    {
        "id": 1016,
        "post": "Javascript Sort Method",
        "url": "javascript/javascript-sort/"
    },
    {
        "id": 1017,
        "post": "Javascript Sets",
        "url": "javascript/javascript-sets/"
    },
    {
        "id": 1018,
        "post": "Javascript Fat Arrows",
        "url": "javascript/javascript-fat-arrows/"
    },
    {
        "id": 1019,
        "post": "Javascript Destructuring",
        "url": "javascript/javascript-destructuring/"
    },
    {
        "id": 1020,
        "post": "Javascript Rest and Spread Operators",
        "url": "javascript/javascript-rest-and-spread-operators/"
    },
]
        

function JavascriptBlogPageList() {
    return (
        
        <nav>
            <ul>
                {blogList.map(blog => (
                    <li key={blog.id}><Link href={blog.url}>{blog.post}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default JavascriptBlogPageList
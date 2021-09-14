import Link from "next/link"

const blogList = [
    {
        "id": 1001,
        "post": "CSS: Useful CSS Snippets - CSS Grid Layout Image Span",
        "url": "css/useful-css-snippets-css-grid-layout-image-span/"
    },
    {
        "id": 1002,
        "post": "CSS: Useful CSS Snippets - Sandbox template",
        "url": "css/useful-css-snippets-sandbox-template/"
    },
    {
        "id": 1003,
        "post": "CSS: Flexbox vs Grid - Which One Should I Use?",
        "url": "css/css-flexbox-vs-grid-which-one-should-i-use/"
    },
    {
        "id": 1006,
        "post": "CSS: How CSS Specificity Works",
        "url": "css/how-css-specificity-works/"
    },
    {
        "id": 1004,
        "post": "CSS: Useful CSS Snippets - Good To Know",
        "url": "css/useful-css-snippets-good-to-know/"
    },
    {
        "id": 1005,
        "post": "CSS: Useful CSS Snippets - Anchors",
        "url": "css/useful-css-snippets-anchors/"
    },
]
        

function CssBlogPageList() {
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

export default CssBlogPageList
import Link from "next/link"

const blogList = [
    {
        "id": 1001,
        "post": "React Basics - useMemo and useCallback Hooks",
        "url": "/react/react-basics-usememo-usecallback-hooks/"
    },
    {
        "id": 1002,
        "post": "React Basics - Custom Hooks",
        "url": "/react/react-basics-custom-hooks/"
    },
    {
        "id": 1003,
        "post": "React Basics - Snippets 2",
        "url": "/react/react-basics-snippets2/"
    },
    {
        "id": 1013,
        "post": "React Basics - Snippets 1",
        "url": "/react/react-basics-snippets1/"
    },
    {
        "id": 1004,
        "post": "React Basics - Fetching Data",
        "url": "/react/react-basics-fetching-data/"
    },
    {
        "id": 1005,
        "post": "React Basics - Redux Overview",
        "url": "/react/react-basics-redux-overview/"
    },
    {
        "id": 1006,
        "post": "React Basics - Master Drilldown",
        "url": "/react/react-basics-master-drilldown/"
    },
    {
        "id": 1007,
        "post": "React Basics - React Router",
        "url": "/react/react-basics-react-router/"
    },
    {
        "id": 1008,
        "post": "React Basics - useContext Hook",
        "url": "/react/react-basics-usecontext-hook/"
    },
    {
        "id": 1009,
        "post": "React Basics - useEffect Hook",
        "url": "/react/react-basics-useeffect-hook/"
    },
    {
        "id": 1010,
        "post": "React Basics - useRef Hook",
        "url": "/react/react-basics-useref-hook/"
    },
    {
        "id": 1011,
        "post": "React Basics - useState Hook (With Forms)",
        "url": "/react/react-basics-usestate-hook-with-forms/"
    },
    {
        "id": 1012,
        "post": "React Basics - useState Hook",
        "url": "/react/react-basics-usestate-hook/"
    },
]
        

function ReactBlogPageList() {
    const listItems = blogList.map(blog => (
        <li key={blog.id}>
            <Link href={blog.url}>{blog.post}</Link>
        </li>
    ))

    return (
        
        <nav>
            <ul>
               {listItems}
            </ul>
        </nav>
    )
}

export default ReactBlogPageList

{/* <div class="card menu bg-light p-1">
    <h3 class="my-2">React Posts</h3>
    <nav>
        <ul>
            <li><a class="text-primary" href="#">Introduction</a></li>
            <li><a href="#">About Loruki</a></li>
            <li><a href="#">Installation</a></li>
        </ul>
    </nav>
</div> */}
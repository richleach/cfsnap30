import { useEffect } from 'react';
import Link from "next/link";

function javascriptAsynchronousOps() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Asynchronous Operations</h2>
                <p>
                While Javascript appears to run, or execute line after line, from the top down, it actually doesn't. Which is why you have to specifically code certain operations to run, and then make the rest of the application wait for that specific task to complete. Enter Callbacks, Promises and Async/Await.
                </p>
                <p>
                Callbacks were used a lot in old school Javascript code but often lead to "callback hell" due to nested operations, requiring one thing to finish after another.... Promises and especially Async/Await are cleaner and more elegant choices to handle the asynchronous duties of your Javascript code.   
                </p>
                <p>
                USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.    
                </p>
            </div>

            <div className="container">    	
<pre><code>{`//callbacks / promises / async await
//The getPosts() and createPosts() were meant to 
//simulate complimentary functions required to 
//run in sequence; the following code uses 
//Promises and Async/Await to accomplish this. 
//You'll need to comment/uncomment each section 
//of code when your're ready to try it out. 

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += {post.title};
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post Three", 
body: "This is post three" })
  .then(getPosts)
  .catch(err => console.log(err));

// Async / Await;
async function init() {
  await createPost({ title: "Post Three", 
  body: "This is post three" });

  getPosts();
}

init();

// Asunc / Await / Fetch
async function fetchUsers() {
  const res = 
  await fetch
  ("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

//fetchUsers();

// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, 'Goodbye')
// );
// const promise4 = 
//fetch('https://jsonplaceholder.typicode.com/users')
//.then(res => res.json()
// );

// Promise.all([promise1, promise2, promise3, 
//promise4]).then(values =>
//   console.log(values)
// );
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptAsynchronousOps

import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

function reactBasicsFetchingData() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
          <Head>
            <title>React Basics: Fetching Data</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
                <h2>React Basics: Fetching Data</h2>
            <p>App.js with the following:
            Use case: Almost every application will require that you request and display data from your own, or external data source. My friend Reed put together a great video on just that, https://www.youtube.com/watch?v=Ur6MNStwXlQ. This is super-handy to use as a starter template!
            </p>

            <h4>App.js</h4>
            <p>For the purposes of demonstration all of the functions and classes are included in this one file (App.js).</p>
            </div>

            <div className="container">    	
<pre><code>{`//App.js
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

class DataFetcher extends React.Component {
  state = {
    isLoading: false,
    error: null,
    posts: []
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch(this.props.url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Error fetching posts!")
        }
      })
      .then(
          posts => this.setState({ posts, isLoading: false })
          )
      .catch(error => this.setState({ error }))
  }

  render() {
    return this.props.children(this.state)
  }
}

class AppRenderProps extends React.Component {
  render() {
    return (
      <div>
        <h1>With Render Props</h1>
        <DataFetcher url={BASE_URL}>
          {({ error, isLoading, posts }) => {
            if (error) {
              return <p style={{ color: 'red' }}>
                  {error.message}</p>
            }
        
            if (isLoading) {
              return <p>Loading posts...</p>
            }
        
            return (
              <div>
                <h1>App</h1>
                {posts.map(post => (
                  <>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  </>
                ))}
              </div>
            ); 
          }}
        </DataFetcher>
      </div>
    )
  }
}

function useDataFetcher(url) {
  const [posts, setPosts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Error fetching posts!")
        }
      })
      .then(posts => {
        setPosts(posts);
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
      })
  }, [url])

  return { posts, isLoading, error }
}

function AppHooks() {
  const { posts, isLoading, error } = useDataFetcher(BASE_URL)

  if (error) {
    return <p style={{ color: 'red' }}>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading posts...</p>
  }

  return (
    <div>
      <h1>App</h1>
      {posts.map(post => (
        <>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </>
      ))}
    </div>
  ); 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppHooks />, rootElement);`}
</code></pre>

            </div>
        </div>

        )
    }    

export default reactBasicsFetchingData

import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsReduxOverview() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: Redux Overview</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
                <h2>React Basics: React Redux Overview</h2>
            <p>State management! While it looks like all the cool kids are starting to transition away from using Redux (in favor of the context API) the likelihood that you'll encounter a project that implements Redux is still pretty good. Here is an overview (with the code) of a basic implementation of Redux in (yet another!) counter application. Boring yes, but the points are all explained pretty clearly....
</p>

            <h4>Index.js</h4>
                <p>This is the root level index.js.</p>
            </div>

            <div className="container">    	
<pre><code>{`import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
   window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();`}
</code></pre>
<br /><br />
                

                <h4>App.js</h4>
                <p>First you need to import the react-redux required libraries, then your actions (broken out into their own file for organization purposes). Assign variable names to the state values you want to use in your JSX for display. In the buttons where you need onClick() events call them with the dispatch function.</p>
            </div>

            <div className="container">    	
<pre><code>{`import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementMultiply } from 
"./actions/index";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter: {counter}
      <p>Is user logged in 
          (isLogged var)? {isLogged ? "true" : "false"}</p>
      <br />
      <button onClick={() => 
          {dispatch(increment());
		}}>+</button>
      <button onClick={() => 
          {dispatch(incrementMultiply(5));
        }}>XX</button>
      <button onClick={() => 
          {dispatch(decrement());
        }}>-</button>
    </div>
  );
}

export default App;`}
</code></pre>
<br /><br />

<h4>/actions/index.js</h4>
    <p>The 3 different actions used above are defined here.</p>            	
<pre><code>{`export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const incrementMultiply = nr => {
  return {
    type: "INCREMENTMULTIPLY",
    payload: nr
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
}; `}
</code></pre>
<br /><br />

<h4>counterReducer.js</h4>
    <p>This is the reducer file where the state actually gets changed based on the needs of the application (in this case it's when the user clicks the increment/decrement/incrementmultiply buttons).</p>            	
<pre><code>{`//REDUCER - CHANGES THE STATE
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "INCREMENTMULTIPLY":
      return state * action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer; `}
</code></pre>


            </div>
        </div>

        )
    }    

export default reactBasicsReduxOverview

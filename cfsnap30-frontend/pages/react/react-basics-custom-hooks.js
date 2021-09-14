import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsCustomHooks() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: Custom Hooks</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
                <h2>React Basics: Custom Hooks</h2>
            <p>App.js with the following:</p>
                <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
                    <li>Import the useForm.js file (see below)</li>
                    <li>Passing generically named getter/setter values (we're using "values" and "handleChange" instead of something like "myvalue" and "setMyvalue") representing JS objects instead of specifically named elements</li>
                    <li>Reference the specific values in object notation where needed (values.email and values.password)</li>
                </ul>

                <h4>App.js</h4>
            </div>

            <div className="container">    	
<pre><code>{`import './App.css';
import React, {useState} from 'react';
import { useForm } from './useForm';

function App() {

  const [values, handleChange] = 
  useForm({email: '', password: ''});

  return (
    <div className="App">
      <header className="App-header">
        Email: 
        <input name='email' value={values.email} 
        onChange={handleChange} /><br/><br/>
        Password: 
        <input name='password' type='password' 
        value={values.password} 
        onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;`}
</code></pre>
<br /><br />

<h4>useForm.js - Custom Hook</h4>
    <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
        <li>Set state values generically</li>
        <li>Use the spread operator to use existing values in state....</li>
        <li>... then generically set the name/value pair of the submitted form values [e.target.name]: e.target.value</li>
    </ul>            	
<pre><code>{`import React, {useState} from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = 
    useState(initialValues);

    return [
        values, 
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ]
}

export default useForm; `}
</code></pre>


            </div>
        </div>

        )
    }    

export default reactBasicsCustomHooks

import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsUseRefHook() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: useRef Hook</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
            <h2>React Basics: useRef Hook</h2>
            <p>Use case: You have a form field with a submit button, enter a value in the field and hit Enter and then form field still has focus, but enter a value in the field and click the submit button and the field loses focus. To restore focus to the field use the useRef hook, which is used to provide direct access to DOM nodes in functional components.</p>

            <h4>App.js </h4>
            
            </div>

            <div className="container">    	
<pre><code>{`import React, {useState, useRef} from "react" 
    //don't forget to import useRef

function App() {
    const [newTodoValue, setNewTodoValue] = 
    useState("") // add todo values to state
    const [todosList, setTodosList] = 
    useState([])  // add todo list to state
    const inputRef = useRef(null)  
    // create instance of useRef
    
    function handleChange(event) {
        setNewTodoValue(event.target.value)
    }
    
    function addTodo(event) {
        event.preventDefault()  
        //prevent form from going all the way
        setTodosList(prevTodosList => 
        [...prevTodosList, newTodoValue]) 
        //copy existing todos, 
		    // add new todo value
        setNewTodoValue("") 
        //clear out the form field for 
        immediate reuse
        inputRef.current.focus()  
        //use the current.focus() of 
        useRef to apply focus to the 
		  //applied DOM node
    }
    
    const allTodos = 
    todosList.map(todo => {todo}) 
    //spit out the todosList, formatted
    
    return (
        <div>
            <form>
                <input ref={inputRef} 
                type="text" name="todo" 
				value={newTodoValue} 
                onChange={handleChange}/> 
                // the "ref" attribute applies the 
				// useRef hook to the DOM element
                <button onClick={addTodo}>
                    Add todo item</button>
            </form>
            {allTodos}  
            //display the entire mapped todo list
        </div>
    )
}

export default App`}
</code></pre><br />

      

    
            </div>
        </div>

        )
    }    

export default reactBasicsUseRefHook

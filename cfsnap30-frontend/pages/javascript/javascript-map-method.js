import { useEffect } from 'react';
import Link from "next/link";

function javascriptMapMethod() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Map Method</h2>
                <p>
                The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
Note: map() does not execute the function for array elements without values.
Note: this method does not change the original array.
                </p>
               
                <p>
                USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.    
                </p>
            </div>

            <div className="container">    	
<pre><code>{`//map creates a new array based on the 
    //function supplied 
const companies = [
	{name: "Company One", category: "Finance", 
    start: 1981, end: 2003},
	{name: "Company Two", category: "Retail", 
    start: 1992, end: 2008},
	{name: "Company Three", category: "Auto", 
    start: 1999, end: 2007},
	{name: "Company Four", category: "Retail", 
    start: 1989, end: 2010},
	{name: "Company Five", category: "Technology", 
    start: 2009, end: 2014},
	{name: "Company Six", category: "Finance", 
    start: 1987, end: 2010},
	{name: "Company Seven", category: "Auto", 
    start: 1986, end: 1996},
	{name: "Company Eight", category: "Technology", 
    start: 2011, end: 2016},
	{name: "Company Nine", category: "Retail", 
    start: 1981, end: 1989}
];

const companyNames = companies.map(
    function(company) {
	return company.name;
});

console.log(companyNames); 
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptMapMethod

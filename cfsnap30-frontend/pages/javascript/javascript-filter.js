import { useEffect } from 'react';
import Link from "next/link";

function javascriptFilterMethod() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Filter Method</h2>
                <p>
                Filter() takes your array values and "filters" out the desired (or not) values based on your criteria in your submitted function.
                </p>
               <p>
               The filter() method creates an array filled with all array elements that pass a test (provided as a function).
Note: filter() does not execute the function for array elements without values.
Note: filter() does not change the original array.   
               </p>
                <p>
                USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.    
                </p>
            </div>

            <div className="container">    	
<pre><code>{`const ages = 
    [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

const canDrink = ages.filter(function(age) {
	if(age >= 21){
	return true;	
	}
});

console.log(canDrink);

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

//what if you wanted to filter on Retail companies?
const retailCompanies = 
companies.filter(function(company){
	if (company.category == 'Retail'){
		return true;
	}
});

//using the forEach() method to loop through 
//the newly built retailCompanies array to 
//display only the company name
retailCompanies.forEach(function(company){
  console.log(company.name);
});

const myCos = companies.filter(
    company => company.category == 'Retail');

console.log(myCos);
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptFilterMethod

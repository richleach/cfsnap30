import { useEffect } from 'react';
import Link from "next/link";

function javascriptHigherOrderFunctions() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Higher Order Functions & Arrays</h2>
                <p>
                My buddy Brad <a href="https://www.youtube.com/watch?v=rRgD1yVwIvE&t=1831s&ab_channel=TraversyMedia" window="_new">posted this video</a> about using higher order array functions and I 
                broke out the code to use in my day to day; very handy as I never seem to remember the exact syntax for the arrow functions.</p>
<p>USAGE: Copy and paste the code samples below into the Javascript console in your browser (including the companies and/or ages arrays), then simply hit return on your keyboard to see the code in action.</p>

            </div>

            <div className="container">    	
<pre><code>{`// JavaScript line comment
/* Javascript 
block 
comment */

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

const ages = [33, 12, 20, 16, 5, 54, 
21, 44, 61, 13, 15, 45, 25, 64, 32];
//STANDARD FOR LOOP
for(let i = 0; i < companies.length; i++) {
	//console.log(companies[i].name);
}

//FOREACH forEach
companies.forEach(function(company){
	//console.log(company.name);
})

//filter
const canDrink = ages.filter(function(age){
	if(age >= 21){
	   return true;
	   }
});

//get 21 and older
const canDrinkAlso = ages.filter(age => age >= 21);
//console.log(canDrinkAlso);

//companies in the category of Retail
const retailCompanies = companies.filter(
    co => co.category == 'Retail');
//console.log(retailCompanies);

//companies that started in the eighties
const eightiesCos = companies.filter(co => (
    co.start >= 1980) && (co.start <= 1989));
//console.log(eightiesCos);

//companies lasting 10 or more years
const olderThanTen = companies.filter(co => (
    (co.end)-(co.start)) <= 10 );
//console.log(olderThanTen);

//map - generates a new array
//create an array of company names
const coNames = companies.map(co => {
	return co.name;
});
//console.log(coNames);

//loop over companies and just pick out 
certain values to print out
const coNamesDuration = companies.map(co => {
	return '{co.name} [{co.start} - {co.end}]';
});
//console.log(coNamesDuration);

const sqrt = ages
	.map(age => {return age*age})
	.map(age => {return age*2})
//console.log(sqrt);

//sort compares 2 values at a time and 
churns over the array. Ternary op returning 
1 if true, -1 if false
const sorted = companies.sort((a,b) => 
(a.start > b.start ? 1 : -1));
//console.log(sorted);

//sort ages, from lowest to highest
const ageSort = ages.sort((a,b) => 
(a > b ? 1 : -1));
//console.log(ageSort);

//add all of the ages together, 
spit out total as ageReduced
const ageReduced = ages.reduce((total, age) 
=> total + age, 0);
console.log(ageReduced);

//add each company's years in existence together
const exist = companies.reduce((total, company) 
=> total + (company.end-company.start),0);
console.log(exist);
 
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptHigherOrderFunctions

import Head from 'next/head'

const search = () => { 
return ( 
    <div> 
        <Head> 
            <script async src="https://cse.google.com/cse.js?cx=cdca5de95cfe42a5a" ></script> 
        </Head> 
        <div className="gcse-search"></div> 
    </div> 
    ) 
} 
export default search

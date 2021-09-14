import { useEffect } from 'react';
import Link from "next/link";

function javascriptNodeJsBasicNodeApp() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Node.js Basic Node App</h2>
                <p>A quick, little Node app that imports a library, asks for user input, modestly error checks and returns an adjusted date/time value. Copy and paste the code below into a javascript file in a new node program in your environment. Don't forget you'll need to do the 'npm install.... ' as directed in the comments of the code.</p>
                

                <h4>Index.js</h4>
            </div>

            <div className="container">    	
<pre><code>{`//Before this will run, youll need to do 
//"npm install moment-timezone" 
//from your command line

//require moment-timezone for timezone processing
const moment = require('moment-timezone');

//declare your default timezone
moment.tz.setDefault('America/Denver');

//declare your targetTimeZone var
let targetTimeZone;

//app logic: when user calls this node app
//they have to use 
//"node index.js America/Los_Angeles"
if(process.argv.length != 3) {
    console.log('Usage: node  ');
    process.exit(1);
} else{
    targetTimeZone=process.argv[2];
}

//console.log results
console.log('The current time in ' 
+ {targetTimeZone} + 'is ' 
+{moment.tz(targetTimeZone).format()}'); 
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptNodeJsBasicNodeApp

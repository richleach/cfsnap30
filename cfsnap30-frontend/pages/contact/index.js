import Link from "next/link";
import Head from 'next/head';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function index() {
    const [userMessage, setUserMessage] = useState('How Can I Help?')
    function sendEmail(e) {
        e.preventDefault();
       
        if(e.target.name.value ==''){
            setUserMessage('Better add a value in the name field')
            return false;
        }
        if(e.target.email.value == ''){
            setUserMessage('Better add a value in the email field')
            return false;
        }
        if(e.target.message.value == ''){
            setUserMessage('Better add a value in the message field')
            return false;
        }

    
        emailjs.sendForm('service_hnoicrl', 'template_8mbc16m', e.target, 'user_ACr7oR5XhBgOBbZnuf31n')
          .then((result) => {
              console.log(result.text);
              setUserMessage('Thank you, message sent.');
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
      <section className="showcase-form-page">
        <Head>
            <title>CFSNAP Contact Page</title>
        </Head>
        <div className="container">
            <div className="showcase-form card">
                <h2>{userMessage}</h2>
                 <form onSubmit={sendEmail}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-control">
                        <input type="text" name="name" placeholder="* Name" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="* Email" required />
                    </div>
                    <div className="form-control">
                        <textarea name="message" required placeholder="* Enter your message here.">
                            
                        </textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />
                </form>
            </div>
        </div>
    </section>
    )
}

export default index
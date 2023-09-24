import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'

function ContactUs() {
    return (
        <>

            <Layout />
            <div className='main-wrapper1'>
             
                <section className='contact padding'>
                <div className='container shadow flexSB'>
                <div className='right row'>
                <p>Reach out to us on:<br/>
                </p><br/>
                <div className='items grid2'>
                <div className='box'>
                <h4>Contact:</h4>
                <p>987654321</p>
                </div><br/>
                <div className='box'>
                <h4>Email us:</h4>
                <p>enlighten@gmail.com</p>
                </div><br/>
                <div className='box'>
                <h4>Instagram:</h4>
                <p>Enlighten_within_yoga</p>
                </div><br/>
                <div className='box'>
                <h4>Find Us at:</h4>
                <p>Enlighten Within , Race Course, Coimbatore</p>
                </div><br/>
                <div className='contact-field'>
                <form action="/submit" method="post">
                For suggestions:
                <input type="text" placeholder="Name" /><br/>
                <input type="text" placeholder="Email" /><br/>
                <input type="text" placeholder="Your suggestions..." />
                <br/>
               <Link to='/Home'><button type="submit">Submit</button></Link>
                </form>
                </div>
              
              
                </div>
                </div>
                </div>
                </section>

            </div>
        </>
    )
}

export default ContactUs
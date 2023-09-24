import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'

function Users() {
    
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                <Container>
                    <h1> Instructional Videos </h1>
                    <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
                    </Container>

                    
                </div>
                
            </div>
            
            <Footer/>
        </>
    )
}

export default Users
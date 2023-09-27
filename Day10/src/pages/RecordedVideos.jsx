import React from 'react'
import Layout from '../components/Layout'
import { useNavigate, Link } from 'react-router-dom'
import Footer from '../components/Footer'
import  '../assets/css/Style.css'

import {Container} from 'react-bootstrap'

function RecordedVideos() {
    
    return (
        <>

            <Layout />
            <div className='rec'>
            <div className='beginners'>
            
                    <h3>Yoga for beginners:</h3>
                    <br/>
                    <div className="beginner1">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/nQwKKCqkJxg" title="Gentle Seated Yoga For Beginners &amp; All Levels | 30 Minute Practice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                    </div>
                    
                    <div className="beginner2">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/09_sEEAg2fc?list=PLBCxhRAIgwOM3kWfXWYNV2h5RC27ijS_2" title="Mindful Seated Yoga | 25 Min Beginner Friendly Stretches - All Levels" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="beginner3">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/zA5oxYvIx0c?list=PLBCxhRAIgwOM3kWfXWYNV2h5RC27ijS_2" title="Gentle Beginner Yoga Flow | 30 Minute Full Body Stretch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                    </div>

            </div>
            <div className='weight-loss'>
            
                    <h3>Yoga for Weightloss:</h3>
                    <br/>
                    <div className="wt1">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/HEHdQxdQT5c?list=PLui6Eyny-Uzx2jQYA8MS73ND2kUMHyII8" title="Yoga for Weight Loss   |   Abs &amp; Arms   |   Yoga With Adriene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                    </div>
                    
                    <div className="wt2">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/6rh6pVGTqRU?list=PLui6Eyny-Uzx2jQYA8MS73ND2kUMHyII8" title="Power Yoga Break  |  Yoga For Weight Loss  |  Yoga With Adriene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                    </div>

                    <div className="wt3">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/dcqW72d5JjI?list=PLui6Eyny-Uzx2jQYA8MS73ND2kUMHyII8" title="Yoga For Weight Loss - Hips and Core Vinyasa - Yoga With Adriene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                    </div>

            </div>
            <div className='stress'>
            
                    <h3>Yoga for Stress Relief:</h3>
                    <br/>
                    <div className="stress1">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/qiKJRoX_2uo?list=PLui6Eyny-Uzytt2xll_JwFbd3WYJyOtT4" title="Yoga for Stress Relief | 7 Minute Practice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    
                    <div className="stress2">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/jOfshreyu4w?list=PLui6Eyny-Uzytt2xll_JwFbd3WYJyOtT4" title="Quick Stress Fix - 5 Minute Sequence" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="stress3">
                    <iframe width="300" height="160" src="https://www.youtube.com/embed/4pLUleLdwY4?list=PLui6Eyny-Uzytt2xll_JwFbd3WYJyOtT4" title="Meditation for Anxiety - Yoga With Adriene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

            </div>
            </div>
            <Footer/>
        </>
    )
}

export default RecordedVideos
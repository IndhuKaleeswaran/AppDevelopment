import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';


const quotes = [
    "Yoga is the journey of the self, through the self, to the self. – The Bhagavad Gita",
    "Yoga is not about touching your toes, it's about what you learn on the way down. – Jigar Gor",
    "Yoga is the fountain of youth. You're only as young as your spine is flexible. – Bob Harper",
    "Yoga teaches us to cure what need not be endured and endure what cannot be cured. – B.K.S. Iyengar",
    "The nature of yoga is to shine the light of awareness into the darkest corners of the body. – Jason Crandell",
    "The body is your temple. Keep it pure and clean for the soul to reside in. – B.K.S. Iyengar",
    "Yoga is a light, which once lit, will never dim. The better your practice, the brighter your flame. – B.K.S. Iyengar"
];

function Challenges() {
    // Function to randomly select a quote
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    return (
        <>
            <Layout />
            <div className="quotes-container">
                <h1>Stay Motivated...!</h1>
                <br/>
                <div className="quote">
                    "{getRandomQuote()}"
                </div>
                <br/>
                <button onClick={() => window.location.reload()} className="quote-button">Get Another Quote</button>
            </div>
            <Footer/>
        </>
    );
}

export default Challenges;

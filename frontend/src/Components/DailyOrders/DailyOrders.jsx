import React from 'react'
import Upperline from '../HomePage/Upperline.jsx';
import Navbar from '../HomePage/Navbar.jsx';
import FormPage from './FormPage.jsx';
import Footer from '../HomePage/Footer.jsx';
import '../styles/DailyOrdersStyles/mainpage.css';
const DailyOrders = () => {
    return (
        <>
            <div className="corner-images">
                <a href="/DailyOrders" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/670159e0de99bb801f41fa09_2024100369.png"
                        alt="Logo 1"
                    />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/670159ddc41a7026d8d430e7_RBI.png"
                        alt="Logo 2"
                    />
                </a>
            </div>
            {<Upperline />}
            {<Navbar />}
            {<FormPage />}
            {<Footer />}


        </>
    )
}

export default DailyOrders

import React from 'react'
import '../styles/HomePageStyles/upperline.css';
import { NavLink } from 'react-router-dom';


const Upperline = () => {
  return (
    <>
        <div className="upperline-container">
            <div className="upperline-midcontainer">

                <div className="upperline-left">
                    <div className="upperline-innerleft">
                        <NavLink to="/">भारत का सर्वोच्च न्यायालय</NavLink>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="upperline-innerright">
                        <NavLink to="/">SUPREME COURT OF INDIA</NavLink>
                    </div>
                </div>
                <div className="horizontal-divider"></div>
                <div className="upperline-right">
                    <div className="vertical-divider"></div>
                    <div className='upperline-rightright'>
                        <p>Skip to main content</p>
                    </div >
                    <div className="vertical-divider"></div>
                    <div className='upperline-rightright'>
                        <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66fd24d9f71ae7a18312e88c_search_ico.png" alt="logo" />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className='upperline-rightright'>
                        <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66fd24d90ee5c97dfa73dd7e_social_media.png" alt="logo" />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className='upperline-rightright'>
                        <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66fd24d8d34e90d332a8ee25_sitemap_icon-p-500.png" alt="logo" />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className='upperline-rightright'>
                        <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66fd24db54266b3d3fce4cc4_accessibility_icon.png" alt="logo" />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className='upperline-rightright'>
                        <p>हिन्दी</p>
                    </div>
                    <div className="vertical-divider"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Upperline

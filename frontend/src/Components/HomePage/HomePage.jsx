import React from 'react'
import Upperline from './Upperline'
import Navbar from './Navbar'
import CourtPart from './CourtPart'
import Information from './Information'
import Explore from './Explore'
import Calender from './Calender'
import Judges from './Judges'
import Footer from './Footer'
import '../styles/DailyOrdersStyles/mainpage.css';
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div className="corner-images">
        <NavLink to='/DailyOrders' target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/670159e0de99bb801f41fa09_2024100369.png"
            alt="Logo 1"
          />
        </NavLink>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/670159ddc41a7026d8d430e7_RBI.png"
            alt="Logo 2"
          />
        </a>
      </div>
      {<Upperline />}
      {<Navbar />}
      {<CourtPart />}
      {<Information />}
      {<Explore />}
      {<Calender />}
      {<Judges />}
      {<Footer />}

    </>
  )
}

export default HomePage

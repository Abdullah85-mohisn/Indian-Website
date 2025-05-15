import React from 'react'
import '../styles/HomePageStyles/calander.css';
import { NavLink } from 'react-router-dom';

const Calender = () => {
  return (
    <>
        <div className="calander-container">
            <div className="calander-midcontainer">
                <div className="calander-left">
                    <div className="calander-buttons">
                        <NavLink to='#' className='calander-buttons-details more-details'>Press Release</NavLink>
                        <NavLink to='#' className='calander-buttons-details'>Tenders</NavLink>
                        <NavLink to='#' className='calander-buttons-details'>Recruitments</NavLink>
                    </div>
                    <div className="calander-left-img">
                        <img src="/calander-points.png" alt="points" />
                    </div>
                </div>
                <div className="calander-right">
                    <img src="/calander.png" alt="calander" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Calender

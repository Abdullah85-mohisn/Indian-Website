import React, { useState, useEffect, useRef } from 'react';
import '../styles/HomePageStyles/navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const navRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (menu) => {
        setOpenMenu(prev => (prev === menu ? null : menu));
    };

    const handleMobileMenuToggle = () => {
        setMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenMenu(null); // close menu if clicked outside
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
        <div className="navbar-container">
            <div className={`navbar-midcontainer ${menuOpen ? 'navbar-midcontainer-open' : ''} `}>

                <div className="navbar-toprow">
                    <div className="navbar-logo">
                        <img src="/nabvar-logo-new.png" alt="Logo" />
                    </div>

                    <button className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
                        <i className="fa-solid fa-bars"></i>
                    </button>

                </div>

                <div className={`${menuOpen ? 'mainlistmenu' : ''}`}>

                    <ul className={`navbar-list ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#">Home</a></li>

                        <li onClick={() => handleMenuClick('about')} className="has-dropdown">
                            <span>About Us <i className="fa-solid fa-chevron-down"></i></span>
                            {openMenu === 'about' && (
                                <ul className="dropdown">
                                    <li>History</li>
                                    <li>Constitution</li>
                                    <li>Jurisdiction</li>
                                    <li>Calendar</li>
                                    <li>Committees</li>
                                    <li>Organization Chart</li>
                                    <li>Registry Officers</li>
                                    <li>Contact Us</li>
                                </ul>

                            )}
                        </li>

                        <li onClick={() => handleMenuClick('judges')} className="has-dropdown">
                            <span>Judges <i className="fa-solid fa-chevron-down"></i></span>
                            {openMenu === 'judges' && (
                                <ul className="dropdown">
                                    <li>Chief Justice and Judges</li>
                                    <li>Former Chief Justices and Judges</li>
                                    <li>Judges Roster</li>
                                    <li>Judges Library</li>
                                    <li>Assets of Judges</li>
                                </ul>
                            )}
                        </li>

                        <li><a href="#">Collegium Resolutions</a></li>

                        <li onClick={() => handleMenuClick('services')} className="has-dropdown">
                            <span>Services <i className="fa-solid fa-chevron-down"></i></span>
                            {openMenu === 'services' && (
                                <ul className="dropdown">
                                    <li>Cause List</li>
                                    <li>Case Status</li>
                                    <li>Daily Orders</li>
                                    <li>Judgements</li>
                                    <li>Office Reports</li>
                                    <li>Caveat</li>
                                    <li>Display Boards</li>
                                </ul>
                            )}
                        </li>

                        <li onClick={() => handleMenuClick('eservices')} className="has-dropdown">
                            <span>e-Services <i className="fa-solid fa-chevron-down"></i></span>
                            {openMenu === 'eservices' && (
                                <ul className="dropdown">
                                    <li>e-Filing</li>
                                    <li>Virtual Justice Clock</li>
                                    <li>Grievance Status</li>
                                    <li>e-SCR</li>
                                    <li>Digi SCR</li>
                                    <li>Online Appearance Slips</li>
                                    <li>Physical Hearing (Hybrid Option)</li>
                                    <li>Suswagatam (e-Pass) </li>
                                    <li>National Judicial Data Grid</li>
                                    <li>Neutral Citation</li>
                                    <li>Certified Copy</li>
                                    <li>Online RTI Portal</li>
                                    <li>Proximity Card Registration</li>
                                </ul>
                            )}
                        </li>

                        <li onClick={() => handleMenuClick('advocates')} className="has-dropdown">
                            <span>Advocates <i className="fa-solid fa-chevron-down"></i></span>
                            {openMenu === 'advocates' && (
                                <ul className="dropdown">
                                    <li>Advocates-on-Record</li>
                                    <li>AOR Examination</li>
                                    <li>Guidelines & Orders</li>
                                    <li>Senior Advocates Designation</li>
                                    <li>Forms</li>
                                    <li>Law Officers</li>
                                    <li>Lawyerss' Chamber Allotment</li>
                                    <li>Legal Aid</li>
                                </ul>
                            )}
                        </li>

                        <li onClick={() => handleMenuClick('notices')} className="has-dropdown">
                            <span>Notices <i className="fa-solid fa-chevron-down"></i></span>
                            {openMenu === 'notices' && (
                                <ul className="dropdown">
                                    <li>Notices and Circulars</li>
                                    <li>FDRs and Deposits</li>
                                    <li>Tenders</li>
                                    <li>Judicial Clerkship</li>
                                    <li>Recruitments</li>
                                </ul>
                            )}
                        </li>

                        <li onClick={() => handleMenuClick('news')} className="has-dropdown">
                            <span>News and Events <i className="fa-solid fa-chevron-down"></i></span>
                            {openMenu === 'news' && (
                                <ul className="dropdown">
                                    <li>Press Release</li>
                                    <li>Live Streaming</li>
                                    <li>Basic Structure Judgment</li>
                                    <li>Webcast</li>
                                    <li>Multimedia</li>
                                    <li>Photo Gallery</li>
                                </ul>
                            )}
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Navbar;

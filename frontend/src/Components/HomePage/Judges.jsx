import React from 'react'
import '../styles/HomePageStyles/Judges.css';
import { NavLink } from 'react-router-dom';


const Judges = () => {
    return (
        <>
            <div className="judges-container">
                <div className="judges-midcontainer">
                    <p>Chief Justice & Judges</p>

                    <div className="judges-grid-container">
                        <NavLink to='#' className="judges-cards">
                            <div className="icon"><img src="/judge1.png" alt="icon" /></div>
                            <div className="label">Dr Justice D Y Chandrachud <br /> Chief Justice of India</div>
                        </NavLink>



                        <NavLink to='#' className="judges-cards">
                            <div className="icon"><img src="/judge2.png" alt="icon" /></div>
                            <div className="label">Justice Sanjiv Khanna </div>
                        </NavLink>


                        <NavLink to='#' className="judges-cards">
                            <div className="icon"><img src="/judge3.png" alt="icon" /></div>
                            <div className="label">Justice Bhushan Ramkrishna Gavai</div>
                        </NavLink>

                        <NavLink to='#' className="judges-cards">
                            <div className="icon"><img src="/judge4.png" alt="icon" /></div>
                            <div className="label">Justice Surya Kant </div>
                        </NavLink>

                        <NavLink to='#' className="judges-cards">
                            <div className="icon"><img src="/judge5.png" alt="icon" /></div>
                            <div className="label">Justice Hrishikesh Roy </div>
                        </NavLink>
                    </div>

                </div>
            </div>

            <div className="contact-container">
                <div className="contact-midcontainer">

                    <div className="contact-upper">

                        <div className="left">
                            <div className="left-upper">
                                <p>Email Us</p>
                                <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffb4b931c0e59a7a01e811_2023100484.svg" alt="email-logo" />
                            </div>
                            <div className="left-down">
                                <p>supremecourt@nic.in</p>
                            </div>

                        </div>

                        <div className="left">
                            <div className="left-upper">
                                <p>Phone</p>
                                <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffb4b9813ce43aedacf3da_2023100488-1.svg" alt="phone-logo" />
                            </div>
                            <div className="left-down">
                                <p>011-23116400, 23116401, 23116402, 23116403</p>
                            </div>

                        </div>
                    </div>

                    <div className="contact-lower">

                        <div className="left">
                            <div className="left-upper">
                                <p>Address</p>
                                <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffb4b901da21554e426993_2023100473.svg" alt="address-logo" />
                            </div>
                            <div className="left-down">
                                <p>The Registrar Supreme Court of India Tilak Marg, New Delhi-110001</p>
                            </div>

                        </div>

                        <div className="left">
                            <div className="left-upper">
                                <p>Telephone Directory</p>
                                <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffb4b944d95316c52d2446_2023100489.svg" alt="telephone-logo" />
                            </div>
                            <div className="left-down">
                                <p>Telephone List Of Officers,Branches etc.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Judges

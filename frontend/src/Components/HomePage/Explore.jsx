import React from 'react'
import '../styles/HomePageStyles/explore.css';
import { NavLink } from 'react-router-dom';

const Explore = () => {
    return (
        <>
            <div className="explore-container">
                <div className="explore-midcontainer">
                    <p>Explore & Connect</p>

                    <div className="explore-grid-container">

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa50644d95316c51df3ab_2024011759.svg" alt="icon" /></div>
                            <div className="label">Landmark Judgment Summaries</div>
                        </NavLink>
                        
                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa50588d48eb1789365c5_2023101957.svg" alt="icon" /></div>
                            <div className="label">Right to Information</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa506d441ad252046309b_2023101913.svg" alt="icon" /></div>
                            <div className="label">eSCR</div>
                        </NavLink>

                        <NavLink to = '#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa506fa1e19beccc48134_2024011793.svg" alt="icon" /></div>
                            <div className="label">Digi DCR</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa505ccb60417d090feae_2023101924.svg" alt="icon" /></div>
                            <div className="label">NJDG</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa505cdc01a317c6a0ee2_2024011677.svg" alt="icon" /></div>
                            <div className="label">SuSwagatam (e-pass)</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa505844baa1a57813b3b_2024011620.svg" alt="icon" /></div>
                            <div className="label">Judges Library</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa506e476b4dcc348da53_2024011695.svg" alt="icon" /></div>
                            <div className="label">Centre for Research & Planning</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa50644d95316c51df3ab_2024011759.svg" alt="icon" /></div>
                            <div className="label">GSICC</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa50644d95316c51df3ab_2024011759.svg" alt="icon" /></div>
                            <div className="label">NALSA</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa50601da21554e32c84a_2024011756.svg" alt="icon" /></div>
                            <div className="label">SCLSC</div>
                        </NavLink>

                        <NavLink to='#' className="explore-cards">
                            <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffa506aacf2e7208bcf19e_2024011629.svg" alt="icon" /></div>
                            <div className="label">e-Committee</div>
                        </NavLink>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore

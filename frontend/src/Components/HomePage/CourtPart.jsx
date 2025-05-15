import React from 'react'
import '../styles/HomePageStyles/courtpart.css';
import { NavLink } from 'react-router-dom';

const CourtPart = () => {
    return (
        <>
            <div className="courtpart-container">
                <div className="courtpart-midcontainer">
                    <img src="/court.jpg" alt="Court Image" />
                    <div className="courtpart-grid-container">
                        <div className="courtpart-grid">

                            <NavLink className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff87583d2a162b38392ba2_2023101970.svg" alt="icon" /></div>
                                <div className="label">Cause List</div>
                            </NavLink>

                            <NavLink className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff94c244d95316c50e9008_2023101931.svg" alt="icon" /></div>
                                <div className="label">Cause Status</div>
                            </NavLink>

                            <NavLink to='/DailyOrders' className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff94c22afdd3daa5f51e97_2023101956.svg" alt="icon" /></div>
                                <div className="label">Daily Orders</div>
                            </NavLink>

                            <NavLink className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff94c83d3e0808c8741595_20240116100.svg" alt="icon" /></div>
                                <div className="label">Judgements</div>
                            </NavLink>

                            <NavLink className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff94c2ab994f4b48b86709_2024011686.svg" alt="icon" /></div>
                                <div className="label">Office Report</div>
                            </NavLink>

                            <NavLink className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff94c3e543f599d4ce6ef3_2024011614.svg" alt="icon" /></div>
                                <div className="label">Caveat</div>
                            </NavLink>

                            <NavLink className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff94c21bd0fb7f18fa5b2a_2023101996.svg" alt="icon" /></div>
                                <div className="label">e-Filling</div>
                            </NavLink>

                            <NavLink className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff94c23d2a162b38457f7b_2024011650.svg" alt="icon" /></div>
                                <div className="label">Display Boards</div>
                            </NavLink>

                            <NavLink className="grid-item">
                                <div className="icon"><img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ff94c244d95316c50e900e_2024080915.svg" alt="icon" /></div>
                                <div className="label">SC ePathon</div>
                            </NavLink>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CourtPart

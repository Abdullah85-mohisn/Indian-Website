import React from 'react'
import '../styles/HomePageStyles/information.css';

const Information = () => {
    return (
        <>
            <div className="information-container">
                <div className="information-left">
                    <p className='information-common-content'>Live Streaming</p>
                    <img src="/court-image.png" alt="image" />

                    <div className="information-below-image">
                        <p>Live Sessions</p>
                        <p>Previous Sessions</p>
                    </div>
                </div>

                <div className="information-right">
                    <p className='information-common-content'>Latest Information</p>
                    <div className="information-right-content">

                        <div className="information-lines-content">
                            <div className='information-arrow'>
                                ▸
                            </div>
                            <div className='information-listingnotices'>
                                <p>Listing Notices</p>
                            </div>
                            <div className='information-listing-content'>
                                <p>Notice regarding changes in Chief Justice’s Court, Court Nos.7 and 16 on 01.09.2025 (Monday)</p>
                            </div>
                        </div>

                        <div className="information-lines-content">
                            <div className='information-arrow'>
                                ▸
                            </div>
                            <div className='information-listingnotices'>
                                <p>Listing Notices</p>
                            </div>
                            <div className='information-listing-content'>
                                <p>List of oral mentioning matters before Hon’ble Courts on 01.09.2025</p>
                            </div>
                        </div>

                        <div className="information-lines-content">
                            <div className='information-arrow'>
                                ▸
                            </div>
                            <div className='information-listingnotices'>
                                <p>Listing Notices</p>
                            </div>
                            <div className='information-listing-content'>
                                <p>Link to submit online application forms for the post of Court Master (Shorthand)</p>
                            </div>
                        </div>

                        <div className="information-lines-content">
                            <div className='information-arrow'>
                                ▸
                            </div>
                            <div className='information-listingnotices'>
                                <p>Listing Notices</p>
                            </div>
                            <div className='information-listing-content'>
                                <p>Notice regarding dispensing with publication of weekly list in the week commencing from 01.09.2025</p>
                            </div>
                        </div>

                        <div className="information-lines-content">
                            <div className='information-arrow'>
                                ▸
                            </div>
                            <div className='information-listingnotices'>
                                <p>Listing Notices</p>
                            </div>
                            <div className='information-listing-content'>
                                <p>Advance List of Chamber Matters likely to be listed in the week commencing from 01.09.2025 to 04.09.2025.</p>
                            </div>
                        </div>

                        <div className="information-lines-content">
                            <div className='information-arrow'>
                                ▸
                            </div>
                            <div className='information-listingnotices'>
                                <p>Listing Notices</p>
                            </div>
                            <div className='information-listing-content'>
                                <p>Notice regarding sitting of all Courts at 11.30 a.m. on 29.08.2025 (Friday)</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Information

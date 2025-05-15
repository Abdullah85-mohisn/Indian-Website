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
                            <p>List of oral mentioning matters before courts on 08.01.2025</p>
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
                            <p>Helpline numbers of Court Masters and Moderators for 08.01.2025</p>
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
                            <p>Notice regarding sitting of Special Bench on 08.01.2025 (Wednesday) in Court No. 6 at 3:45 p.m.</p>
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
                            <p>List of oral mentioning matters before Hon’ble Courts on 08.01.2025</p>
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
                            <p>Notice regarding change in Chief Justice’s Court and Court No. 17 and non sitting of Hon’ble Mr. Justice Pamidighantam Sri Narasimha and Cancellation of Court No. 12 on 08.01.2025 (Wednesday)</p>
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
                            <p>Regarding shifting of services related to issuance of proximity cards and vehicle entry stickers</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
  )
}

export default Information

import '../styles/HomePageStyles/footer.css';

const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="footer-midcontainer">

                <div className="row">
                    <ul>
                        <li>Accessibility</li>
                        <li>Ameneties</li>
                        <li>Museum</li>
                        <li>Guided Tour</li>
                        <li>FAQs</li>
                        <li>Webcast</li>
                    </ul>
                </div>
                
                <div className="row">
                    <ul>
                        <li>India Code</li>
                        <li>Pay Scales</li>
                        <li>Telephone Directory</li>
                        <li>Argument Transcripts</li>
                        <li>Accounts</li>
                    </ul>
                </div>

                <div className="row">
                    <ul>
                        <li>Steps taken during COVID-19</li>
                        <li>Employee Corner</li>
                        <li>Officers Servant Rules</li>
                        <li>Important Links</li>
                        <li>Officers / Officials</li>
                    </ul>
                </div>

                <div className="row">
                    <div className="first-logo">
                        <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffbeef174359fb2d2da8e7_2024012288.svg" alt="logo" />
                    </div>
                    <div className="second-logo">
                        <p>Download App From</p>
                        <div className='second-logo-imgs'>
                            <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffc0507f3f9504810728d6_2023100563.svg" alt="google-play" />
                            <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffc0501c03892d226291e5_2023102026.svg" alt="apple-store" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="footer-underline">
            <p>Website Policies / Contact Us / Help / Disclaimer</p>
        </div>

        <div className="footer-end">
            <div className="end-content">
                <p>Content Owned by Supreme Court Of India ,</p>
                <p>Developed and hosted by National Informatics Centre,</p>
                <p>Ministry of Electronics & Information Technology, Government of India</p>
                <p className='last-updated'>Last Updated: Jan 08, 2025</p>
            </div>

            <div className="end-images">
                <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffc51f5560f11af5aef0e7_s3waas.png" alt="img" />
                <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffc51f8225c7b2fac45d67_nicLogo.png" alt="img" />
                <img src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffc51f0d4234facd017206_NALSA.png" alt="img" />
                <img className='last-img' src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffc51f4ef4a7a27eca6c5c_SCLSC.jpg" alt="img" />
                <img className='last-img' src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/66ffc51f114bf176c0c95f71_IC-logo.png" alt="img" />
            </div>
        </div>
    </>
  )
}

export default Footer

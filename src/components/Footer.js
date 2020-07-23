import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="footer body">
            <div className="row w-100">
         
            <div className="col-md-10">
                <div>
                    <div style={{ fontWeight: "bolder" }}>
                        <h3 className="footertext" >© 2020 BEYOND</h3>
                    </div>
                    <div>
                        <h3 className="footertext">WE ONLY RELEASE MUSIC WE LIKE, DESPITE GENRE OR SOUND.</h3>
                    </div>
                </div>

            </div>

            <div className="col-md-2 d-flex align-items-end pb-4 justify-content-end menu">
                <i class="fab fa-bandcamp" style={{ marginLeft: "20px" }}></i>
                <i class="fab fa-soundcloud" style={{ marginLeft: "20px" }}></i>
                <i class="fab fa-instagram" style={{ marginLeft: "22px" }}></i>
            </div>
       
            </div>

        </div>
    )
}

export default Footer

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';

const Pick = () => {
    return (
        <div className="artistpage body">

            <Row>

                <div className-="playcard">

                    <img srcset="https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=683&amp;e=webp 2x, https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=1024&amp;e=webp 3x" src="https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=683&amp;e=webp" class="viewable" />

                    <div className="d-flex justify-content-between radiocard">
                        {/* <i style={{ color: "tomato", marginTop: "5px" }} class="fa fa-play" aria-hidden="true"></i> */}
                        <ReactAudioPlayer
                            src="https://soundcloud.com/larr-a2/laudaitinhai-baile"
                            autoPlay
                            controls
                        />
                    </div>

                    <div className="radioinfo">
                        <h3>04.05.2020</h3>
                        <h3>Selections W/ Ms, Ed</h3>
                        <h3>Selecta — 01:00:14</h3>
                    </div>


                </div>

                <div>

                    <img srcset="https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=683&amp;e=webp 2x, https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=1024&amp;e=webp 3x" src="https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=683&amp;e=webp" class="viewable" />

                    <div className="d-flex justify-content-between radiocard">
                        <i style={{ color: "tomato", marginTop: "5px" }} class="fa fa-play" aria-hidden="true"></i>
                        <div class="sc-left" style={{ color: "black" }}>1:08:47</div>
                    </div>

                    <div className="radioinfo">
                        <h3>04.05.2020</h3>
                        <h3>Selections W/ Ms, Ed</h3>
                        <h3>Selecta — 01:00:14</h3>
                    </div>


                </div>
                <div>

                    <img srcset="https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=683&amp;e=webp 2x, https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=1024&amp;e=webp 3x" src="https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=683&amp;e=webp" class="viewable" />

                    <div className="d-flex justify-content-between radiocard">
                        <i style={{ color: "tomato", marginTop: "5px" }} class="fa fa-play" aria-hidden="true"></i>
                        <div class="sc-left" style={{ color: "black" }}>1:08:47</div>
                    </div>

                    <div className="radioinfo">
                        <h3>04.05.2020</h3>
                        <h3>Selections W/ Ms, Ed</h3>
                        <h3>Selecta — 01:00:14</h3>
                    </div>


                </div>

                <div>

                    <img srcset="https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=683&amp;e=webp 2x, https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=1024&amp;e=webp 3x" src="https://d2kq0urxkarztv.cloudfront.net/5a8ad8445e30ce008f8e9659/1358968/upload-4cf789b4-9285-4204-bdde-97b81830be27.jpg?w=683&amp;e=webp" class="viewable" />

                    <div className="d-flex justify-content-between radiocard">
                        <i style={{ color: "tomato", marginTop: "5px" }} class="fa fa-play" aria-hidden="true"></i>
                        <div class="sc-left" style={{ color: "black" }}>1:08:47</div>
                    </div>

                    <div className="radioinfo">
                        <h3>04.05.2020</h3>
                        <h3>Selections W/ Ms, Ed</h3>
                        <h3>Selecta — 01:00:14</h3>
                    </div>


                </div>
            </Row>
        </div >



    )
}

export default Pick

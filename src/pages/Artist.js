import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import { Navigationbar, SigningUp, Footer, Loading } from '../components'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Zoom } from '@material-ui/core'



const Artist = () => {
    const alphabet = [
        ,
        [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            
        ],
        [
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            
            


        ],
        ["M",
        "N","O",
        "P","Q",
            "R",
            
            


        ], [
            "S",
            "T",
            "U",
            "V","W",
        "X"],["Y", "Z", "0-9"]

    ]

    let [artists, setArtists] = useState([])
    let history = useHistory()
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()
  
    useEffect(() => {
        if (artists.length === 0) {
            axios.get(`${process.env.REACT_APP_URL}/artists`).then((res) => {
                console.log(res.data)
                setArtists(res.data.data)
                dispatch({ type: "LOADED" })
            })
        }
    }, []);
    return (
        <div>
            {loading
                ? <Loading />
                :
                <div className="artistpage body">
                    <Row>
                        <div className="filtered-city tinytext">
                            <div style={{ fontWeight: "bolder" }} >FILTERED BY NAME <i class="fal fa-filter"></i></div>


                            <div className="d-flex" style={{ marginTop: "10px" }}>

                                <div>

                                    <a className="city" href="#A">A</a> /
                                        <a className="city" href="#B">B</a> /
                                        <a className="city" href="#C">C</a> /
                                        <a className="city" href="#D">D</a> /
                                        <a className="city" href="#E">E</a> /
                                        <a className="city" href="#F">F</a> /
                                        <a className="city" href="#G">G</a> /
                                        <a className="city" href="#H">H</a> /
                                        <a className="city" href="#I">I</a> /
                                        <a className="city" href="#J">J</a> /
                                        <a className="city" href="#K">K</a> /
                                        <a className="city" href="#L">L</a> /
                                        <a className="city" href="#M">M</a> /
                                        <a className="city" href="#N">N</a> /
                                        <a className="city" href="#O">O</a> /
                                        <a className="city" href="#P">P</a> /
                                        <a className="city" href="#Q">Q</a> /
                                        <a className="city" href="#R">R</a> /
                                        <a className="city" href="#S">S</a> /
                                        <a className="city" href="#T">T</a> /
                                        <a className="city" href="#U">U</a> /
                                        <a className="city" href="#V">V</a> /
                                        <a className="city" href="#W">W</a> /
                                        <a className="city" href="#X">X</a> /
                                        <a className="city" href="#Y">Y</a> /
                                        <a className="city" href="#Z">Z</a> /
                                        <a className="city" href="#0-9">0-9</a>

                                </div>
                                {/* {cities.map(item => <div className="city" style={{ marginRight: "20px" }} onClick={(e) => handleCityClick(item)}>{item.city.toUpperCase()}</div>)} */}
                            </div>
                        </div>
                    </Row>
                    <div>
                        {alphabet.map((item => <Row>{item.map(z=>
                        <Col>
                        <section id={z}>
                        <h1 style={{color:"#404040", fontSize:"100px"}}>{z}</h1>
                            
                        </section>
                        
                        <div>
                        {artists.filter(element => element.title.startsWith(z)).map(element => <div><h4><Link onClick={() => history.push({ pathname: `/artists/${element.title}` })} style={{ color: "white" }} className="artist-title-list">{element.title}</Link></h4></div>)}

                        </div>
                        </Col>
                            )}</Row>))}
                    
                       

                     </div>
                     
                        
                     <div id="a"><i class="fa fa-long-arrow-up" aria-hidden="true" style={{ marginLeft: "-10px" }}></i> <span className="tinytext" style={{ marginLeft: "10px" }}>BACK TO TOP</span></div>
                     

                    
                </div>
            }

            <SigningUp />
            <Footer />
        </div>
    )
}

export default Artist

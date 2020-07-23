import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import { Badge, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { Navigationbar, SigningUp, Footer, Loading } from '../components';

const ArtistDetail = (props) => {
    const user = useSelector(s => s.user)

    let [artists, setArtists] = useState([]);
    let history = useHistory()
    const loading = useSelector(state => state.app.loading)
    let { title } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: "LOADING" })
        axios.get(`${process.env.REACT_APP_URL}/artists/${title}`).then((res) => {
            console.log("single artist data is", res.data.data)
            setArtists(res.data.data)
            dispatch({ type: "LOADED" })

        })
    }, [title]);

    if (loading) return <Loading />
    return (
        <div>
        
            <div class="fill">
                <img src={artists.pictureURL} alt="Artist Image" />
            </div>
            <div className="artist-title body">
                <h1 style={{ fontSize: "120px" }}>{title}</h1>
                <div>
                    <div>{artists.genres && artists.genres.map(item => <Badge style={{ marginLeft: "5px" }} variant="light">{item.genre.toUpperCase()}</Badge>)}</div>
                    <div><i class="fal fa-location"></i>{artists.city}</div>
                    <div>Bandcamp / Instagram / Facebook</div>


                </div>


            </div>

            <div style={{ backgroundColor: "black", paddingBottom: "30px" }}>

                <Col>
                    <div className="artist-detail">{artists.biography}</div>
                    <div className="breadcrumbs body">
                        <Link style={{ textDecoration: "none" }} to="/artists"><i class="fal fa-long-arrow-left"></i><span className="tinytext" style={{ marginLeft: "10px" }}>BACK TO ARTISTS</span></Link>
                        {user.isAdmin
                                ?
                                <div>
                                    <div className="tinytext" style={{ marginRight: "25px"}}> 
                                   <Link to={`update/${title}/`}> <i class="fa fa-adjust 3x" aria-hidden="true" style={{ marginRight: "20px"}}></i> </Link>
                                     <i class="fal fa-trash-alt"></i></div>
                                </div>
                                :
                                <div></div>}

                    </div>

                   
                </Col>
            </div>


            <SigningUp />
            <Footer />

        </div>
    )
}

export default ArtistDetail

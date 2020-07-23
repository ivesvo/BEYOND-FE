import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Button, Row } from 'react-bootstrap'
import { Navigationbar, SigningUp, Footer, GenresDetail } from '../components'
import { Link, useHistory } from 'react-router-dom'
import Artist from './Artist'


const Genres = () => {
    let [genres, setGenres] = useState([])
    let [genre, setGenre] = useState(null)
  
    let history = useHistory()


    useEffect(() => {
        if (genres.length == 0) {
            axios.get("http://localhost:5000/genres").then((res) => {
                console.log("genres", res.data.data)
                setGenres(res.data.data)
            }, [])
        }

    }, []);

    const toggleSortZ = () => {
        let newgenres = genres.reverse().slice() // slice to go back to the begining state??????
        console.log(newgenres)
        setGenres(newgenres)
    }

    return (
        <div>
            <div className="artistpage body">
                <Row>
                    <div className="filtered-city tinytext">
                        <div style={{ fontWeight: "bolder" }} >FILTERED BY NAME <i class="fal fa-filter"></i></div>
                        <div className="d-flex">
                            <div className="city" onClick={()=> toggleSortZ()}>A → Z</div>
                            <div className="city" onClick={() => toggleSortZ()}>Z → A</div>
                        </div>
                    </div>
                </Row>

                <Row>
                    <Col xs={12} md={2}>
                        {genres.map(element =><h4 onClick={() => setGenre(element)} style={{ color: "white", marginBottom:"20px"}} className="artist-title-list">{element.genre.toUpperCase()}</h4>)}
                    </Col>
                    <Col md={1}></Col>
                    <Col md={8} xs={12}>
                        {genre ? <GenresDetail genre={genre} /> : <></>}
                    </Col>
                </Row>
            </div>

            <SigningUp />
            <Footer />
        </div>
    )
}

export default Genres

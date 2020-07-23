import React, { useEffect, useState } from 'react'
import { Navigationbar, SigningUp, Footer, Loading, PageLink } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Button, Badge, Card } from 'react-bootstrap'
import Moment from 'react-moment';
import moment from 'moment'

export default function Events() {
    const user = useSelector(s => s.user)
    const [events, setEvents] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [maxPageNum, setMaxPageNum] = useState(5)
    const [cities, setCities] = useState([])
    const [q, setQ] = useState("")
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()


    async function fetchData(q, pageNum) {
        axios.get(`${process.env.REACT_APP_URL}events/?${q}&page=${pageNum}`).then((res) => {
            console.log("events data", res.data.data)
            setEvents(res.data.data)
            dispatch({ type: "LOADED" })
        })
    }


    useEffect(() => {
        if (events.length === 0) {
            fetchData(q, pageNum)

            axios.get(`${process.env.REACT_APP_URL}city`).then((res) => {
    
                console.log(pageNum)
                setCities(res.data.data)
            })
        } else {
            fetchData(q, pageNum)
        }
    }, [q, pageNum]);

    function buildQ(str) {
        setQ(str)
    }
    console.log(q)
    const handleCityClick = (e, p) => {


        // const clickcity = cities.find((item) => item.city === e.city)
        // console.log(`http://localhost:5000/events?city=${clickcity._id}&page=${1}`)
        // axios.get(`http://localhost:5000/events?city=${clickcity._id}&page=${1}`).then((res) => {
        //     console.log("click city", res.data.data)
        //     setEvents(res.data.data)
        //     console.log(p)
        //     setPageNum(p)
        // })
    };

    // events?city=hanoi&page=2
    const handleAllClick = (e) => {
        buildQ("")
    }


    const goNextPage = () => {
        setPageNum(pageNum + 1)
        if (pageNum >=5){
            setPageNum(5)
        }
    }
    const goPrevPage = () => {
        setPageNum(pageNum - 1)
        if (pageNum <=1){
            setPageNum(1)
        }
    }

    if (events == null) {
        return <Loading />

    } else {
        return (
            <div>
                {loading
                    ? <Loading />
                    :
                    <div className="eventpage body">

                        <Row>
                            <div className="filtered-city tinytext">
                                <div className="breadcrumbs" style={{ fontWeight: "bolder" }}>
                                    <div>FILTERED BY CITY <i class="fal fa-filter"></i></div>
                                    {user.isAdmin
                                        ? <Link to="/events/submit/new"> <div> SUBMIT AN EVENT <i class="fal fa-plus-circle"></i></div></Link>
                                        : <div></div>
                                    }



                                </div>
                                <div className="d-flex">
                                    <div className="city" onClick={(e) => handleAllClick()}>ALL</div>
                                    {cities.map(item => <div className="city" style={{ marginRight: "20px" }} onClick={(e) => buildQ(`city=${item._id}`)}>{item.city.toUpperCase()}</div>)}

                                    <Col className="d-flex justify-content-end" style={{ padding: "10px" }}>
                                        {pageNum}/{maxPageNum}
                                    </Col>
                                    <Col lg={1} className="d-flex justify-content-end">
                                        <PageLink disabled={pageNum === 1} handleClick={goPrevPage}>
                                            <i class="fal fa-long-arrow-left 3x"></i>
                                        </PageLink>
                                        <PageLink handleClick={goNextPage}>
                                            <i class="fal fa-long-arrow-right 3x"></i>
                                        </PageLink>
                                    </Col>


                                </div>



                            </div>
                        </Row>
                        <Row>
                            {events.map((e) => {
                                return (
                                    <Col lg={4}>
                                        <Event {...e} />
                                    </Col>
                                );
                            })}
                        </Row>

                    </div>
                }
                <SigningUp />
                <Footer />
            </div>
        )
    }
}

const Event = ({ title, posterURL, city, date, _id }) => {
    return (
        <div style={{ maxWidth: '35rem' }} >
            <img
                variant="top"
                resizeMode='cover'
                src={posterURL}
                alt="something"
                className="card-img"
            />


            <div>
                <Badge style={{ marginTop: "20px" }} variant="light">{moment(date).fromNow().toUpperCase()}</Badge>

                <Card.Text style={{ color: "white", marginTop: "20px" }} className="country tinytext">{city && city.code.toUpperCase()} /
                <Moment format="DD/MM/YYYY">{date}</Moment>
                </Card.Text>
                <Card.Title style={{ color: "white", fontSize: "30px" }} className="card-title body">{title}</Card.Title>

                <Link to={"/events/" + _id} className="stretched-link" />
            </div>
        </div>
    );

}
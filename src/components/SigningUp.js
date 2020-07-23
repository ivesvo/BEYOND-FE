import React, { useState } from 'react'
import { Button, Row, Form, Col } from 'react-bootstrap'




import { Link } from 'react-router-dom'

import '../App.css';
import axios from 'axios';

export default function SigningUp() {
    const [email, setEmail] = useState("EMAIL")

    const createUser  = async (e) =>{
        await axios.post("http://localhost:5000/users",{
            email: email
        })
    } 
    


    return (
        <div className="signing-up">

            <div>
                {/* <Row>
                   If not you, then who?
                </Row> */}
                <Row className="email">
                    <Col md={10} xs={6}>
                        If not you, then who?
                      
                        <h1 style={{ fontSize: "60px", fontWeight: "bolders", marginLeft:"-10px" }}>
                            <Form.Group controlId="formBasicEmail">
                               
                                <input
                                    placeholder="EMAIL"
                                    className="emailbar"
                                    type="text"
                                    value={email}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)} />

                             
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </h1>
                         
                    
                       
                    </Col>
                    <Col md={2} xs={3} className="d-flex justify-content-end">
                        <button className="btn sharp" style={{ fontFamily: "TimesNow", fontSize: "50px" }} type="submit" onClick={createUser}>SIGN UP NOW</button>
                    </Col>



                </Row>


            </div>

        </div>

    )
}



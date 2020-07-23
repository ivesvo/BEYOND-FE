import React, { useState } from 'react'
import { Button, Row, Form, Col } from 'react-bootstrap'




import { Link } from 'react-router-dom'

import '../App.css';
import axios from 'axios';

export default function SigningUp() {
    const [email, setEmail] = useState("EMAIL")
    const [password, setPassword] = useState("✧✧✧✧✧✧✧✧")
    const [name, setName] = useState("")

    const createUser  = async (e) =>{
        await axios.post(`${process.env.REACT_APP_URL}/users`,{
            email: email, password: password, name:name
        })
          alert("USER CREATED")
    
        
    } 
    


    return (
        <div className="signing-up">

            <div>
                <Row className="email">
                   
                    <Col md={10} xs={2}>
                        <div className="d-flex align-items-baseline">
                        If not you, then
                    
                        <Form.Group controlId="formBasicPassword">
                              
                              <input
                            
                                  placeholder="who?"
                                  className="emailbar"
                                  type="text"
                                  value={name}
                                  autoComplete="off"
                                  onChange={(e) => setName(e.target.value)} />

                           
                              <Form.Text className="text-muted">
                              </Form.Text>
                          </Form.Group>
                          </div>
                      
                        <h1 style={{ fontSize: "60px", fontWeight: "bolders", marginLeft:"-10px" }}>
                            <div className="breadcrumbs">
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


                           <Form.Group controlId="formBasicPassword">
                              
                               <input
                                   placeholder="hiphopnevadie"
                                   className="emailbar"
                                   type="password"
                                   value={password}
                                   autoComplete="off"
                                   onChange={(e) => setPassword(e.target.value)} />

                            
                               <Form.Text className="text-muted">
                               </Form.Text>
                           </Form.Group>

                            </div>
                           
                       
                        </h1>

                       
                       
                    </Col>
                    <Col md={2} xs={3} className="d-flex justify-content-end">
                        <button className="btn sharp 1" style={{ fontFamily: "TimesNow", fontSize: "50px" }} type="submit" onClick={createUser}>SIGN UP NOW</button>
                    </Col>



                </Row>


            </div>

        </div>

    )
}



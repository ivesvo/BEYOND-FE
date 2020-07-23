import React, {useState} from 'react'
import {Button,Form, FormControl} from 'react-bootstrap'
import axios from 'axios'

export default function SignUpTab(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")



    const createUser  = async (e) =>{
        await axios.post(`${process.env.REACT_APP_URL}/users`,{
            email: email, password: password
        })
    } 


    return (
        <div>
             
            <Form>
                <div className="d-flex login">
                <div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{margin:"20px"}}className="tinytext">EMAIL ADDRESS</Form.Label>
                    <input
                        type="email"
                        row="3"
                        col="8"
                        className="searchbar"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)} 
                        />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                </div>

                <div>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{margin:"20px"}} className="tinytext">PASSWORD</Form.Label>
                    <input
                        className="searchbar"
                        row="3"
                        col="8"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e)} 
                        />
                </Form.Group>

                </div>
                

                </div>

                
                <button className="btn sharp" onClick={createUser} >Sign Up</button>
            </Form>
        </div>
    )
}


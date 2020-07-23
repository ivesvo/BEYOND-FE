import React from 'react'
import {Button,Form, FormControl} from 'react-bootstrap'

const SignUpTab = () => {
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
                        // onChange={(e) => handleEmailChange(e)} 
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
                        // onChange={(e) => handlePasswordChange(e)} 
                        />
                </Form.Group>

                </div>
                

                </div>

                
                <button >Sign In</button>
            </Form>
        </div>
    )
}

export default SignUpTab
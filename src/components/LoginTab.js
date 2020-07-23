import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'

export default function LoginTab() {
    const user = useSelector(s => s.user)
    const dispatch = useDispatch()
    let history = useHistory();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const loginABC = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${process.env.REACT_APP_URL}/sauth/login`, { email: userEmail, password: userPassword }, {
            method: "POST"
        });
        const { user, token } = res.data.data;
        console.log(user);
        localStorage.setItem("token", token);
        dispatch({ type: "LOGIN", payload: { isAuthenticated: true } });
        if (res.status == 401) {
            alert("No User Or Password Found")
        } else {
            history.push("/me");
        }

    }

    const loginFacebook = async (data) => {
        if (data && data.accessToken) {
            console.log(data.accessToken)
            const res = await fetch(`${process.env.REACT_APP_URL}/auth/login/facebook?token=${data.accessToken}`)
            if (res.ok) {
                const dt = await res.json()
                console.log("dt is", dt)
                dispatch({ type: "LOGIN", payload: dt.data })
                localStorage.setItem("token", dt.token)
                history.push('/me')
            } else {
                console.log(res)
            }
        }
    }

    return (
        <div>

            <Form onSubmit={(e) => loginABC(e)}>
                <div className="d-flex login">
                    <div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ margin: "20px" }} className="tinytext">EMAIL ADDRESS</Form.Label>
                            <input
                                type="email"
                                row="3"
                                col="8"
                                className="searchbar"
                                placeholder="Enter email"
                                onChange={(e) => setUserEmail(e.target.value)} />

                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                </Form.Text>
                        </Form.Group>
                    </div>

                    <div>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ margin: "20px" }} className="tinytext">PASSWORD</Form.Label>
                            <input
                                className="searchbar"
                                row="3"
                                col="8"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setUserPassword(e.target.value)} />
                        </Form.Group>

                    </div>


                </div>

                <div>
                    <button className="btn sharp" >Sign In</button>
                    <FacebookLogin
                        
                        appId="274983090404652"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={loginFacebook}
                        cssClass="btn sharp"
                        icon="fa-facebook"
                    />

                 



                </div>

            </Form>

        </div>




    )
}

import React, { useState, useEffect } from 'react'
import { Navigationbar, SigningUp, Footer, LoginTab, SignUpTab } from '../components'

import GoogleLogin from 'react-google-login';
import { Tabs, Tab, Sonnet } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const User = () => {
  
    const token = localStorage.getItem("token")
    const [key, setKey] = useState('home');
    let history = useHistory()
    const dispatch = useDispatch()

   
    const logout = async () =>{
        const res = await fetch(`http://localhost:5000/auth/logout`,{
            headers :{
                authorization: `Bearer ${token}`,
            }
        });
        if (res.ok){
        } else {

        }
    }

    return (
        <div>
    
            <div className="loginpage">
                <div>
                    <Tabs 
                        style={{width: "40rem"}}
                        className="tinytext"
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                    
                        <Tab 

                        eventKey="home" 
                        title="SIGN IN">
                            <LoginTab /> 
                        </Tab>
                        <Tab eventKey="profile" title="JOIN">
                            <SignUpTab />
                        </Tab>
                    </Tabs>
                </div>

            </div>
            <SigningUp />
            <Footer />
        </div>
    )
}

export default User

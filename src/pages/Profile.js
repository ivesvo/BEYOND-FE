import React from 'react'
import { Navigationbar, SigningUp, Footer, ShopNow, Jumbotron } from '../components'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions/userAction'


const Profile = () => {
  
    const user = useSelector(s => s.user)
    const dispatch = useDispatch()
    console.log(user)

    const goout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <div className="loginpage body">
                <div>
                    <div className="tinytext">NAME</div>
                    <h1 style={{ color: "white" }}>{user.user.name}</h1>
                </div>

                <div>
                    <div className="tinytext">EMAIL</div>
                    <h1 style={{ color: "white" }}>{user.user.email}</h1>


                </div>
                
                <div>
                    {user.isAdmin
                        ? <div className="tinytext">ADMIN</div>
                        : <div className="tinytext">USER</div>
                    }
                   
                    <button className="tinytext btn sharp" onClick={() => goout()}> <h5><i class="fal fa-sign-out 5x" ></i></h5></button>
                </div>


            </div>
            <SigningUp />
            <Footer />
        </div>
    )
}

export default Profile

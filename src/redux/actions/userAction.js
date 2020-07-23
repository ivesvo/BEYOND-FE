
const loginWithEmail = (email, password)=> async dispatch =>{
    const res = await fetch(`${process.env.REACT_APP_URL}auth/login`,{
        method: "POST",
        headers:{
            "content-type": "apoolication/json"
        },
        body: JSON.stringify({email, password})
    })
    const body = res.body
    console.log(body)
    localStorage.setItem("token", body.data.token)
    dispatch({
        type:"LOGIN",
        payload: body.data.user
    })
}


const logout = () => async dispatch => {
    const res = await fetch(`${process.env.REACT_APP_URL}auth/logout`,{
        headers:{
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    if (res.status === 204){
        localStorage.removeItem('token')
        dispatch({type:"LOGOUT"})
    }
}

export {loginWithEmail, logout}
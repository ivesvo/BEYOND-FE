const init = {
    isAuthenticated: false,
    isAdmin: false,
    user: null
}

export default function(state=init, {type,payload}){
    switch (type){
        case "LOGIN":
            return { ...state, isAuthenticated:true, isAdmin: payload.role == "admin", user:payload}
        case "LOGOUT":
            return {...init}
        default :
            return state
    }
}


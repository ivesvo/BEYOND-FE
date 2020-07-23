const init = {
    loading : true,

}
export default function(state=init, {type,payload}){
    switch (type){
        case "LOADED":
            
            return { ...state, loading: false}
        case "LOADING":
            return { ...state, loading: true}

        default :
            return state
    }
}


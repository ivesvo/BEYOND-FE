import appReducer  from "./app"
import userReducer from './user'
import cartReducer from './purchase'
import {combineReducers} from "redux"

const rootReducer =combineReducers({
    user: userReducer,
    app:appReducer,
    cartReducer: cartReducer
}
)

export default rootReducer
import React from 'react'
import {Loading} from '../components/Loading'
import { Route, Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function ProtectedRoute({ component: Component, ...props }) {
    const user = useSelector(s=>s.user)
    const loading = useSelector(s=>s.app.loading)
    if(loading) return <div></div>
    return (!user.isAuthenticated)
        ? <Redirect to="/user" />
        : <Route {...props} render={() => <Component />} />
}

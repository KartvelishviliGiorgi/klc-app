import { useEffect, useContext } from "react"

import Users from '../components/Users'
import { AuthContext } from '../context/AuthorizationContext'

const Home = () => {
    const [access, setAccess] = useContext(AuthContext)

    useEffect(() => {
        if(!localStorage.getItem('authToken')) {
            setAccess(false)
        } else {
            setAccess(true)
        }
    })

    return access ? <>
        <Users />
    </>
    :
    <h1>Please sign in your account and if you do not have an account click the Registration button</h1>
}

export default Home

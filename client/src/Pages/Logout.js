import { useEffect, useContext } from "react"
import { useHistory } from "react-router"

import { AuthContext } from '../context/AuthorizationContext'

const Logout = () => {
    const history = useHistory()

    const [access, setAccess] = useContext(AuthContext)

    useEffect(() => {
        if(access && localStorage.getItem('authToken')) {
            setAccess(false)
            localStorage.removeItem('authToken')
        }
    }, [])

    return history.push('/')
}

export default Logout

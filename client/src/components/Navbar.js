import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/AuthorizationContext'

const Navbar = () => {
    const [authoirized, setAuthoirized] = useContext(AuthContext)

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {authoirized ? <li onClick={e => { localStorage.removeItem('authToken'); setAuthoirized(false) }}><Link to="/">Log out</Link></li> :
                    <>
                        <li>
                            <Link to="/sign-up">Registration</Link>
                        </li>
                        <li>
                            <Link to="/sign-in">Authorization</Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default Navbar

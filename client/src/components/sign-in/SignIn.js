import { useState, useEffect } from "react"
import { useHistory } from "react-router"

import InputComponent from '../InputComponent'

const SignIn = () => {
    const history = useHistory()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [errMessage, setErrMessage] = useState('')

    const loginUser = async user => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)           
        }

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/signin`, requestOptions);
        const data = await response.json();
        
        if(data.success) {
            localStorage.setItem('authToken', data.token)

            history.push('/')
        } else {
            setErrMessage(data.error)
        }        
    }

    const submitForm = e => {
        e.preventDefault()

        const user = {
            email,
            password
        }

        setEmail('')
        setPassword('')

        loginUser(user)
    }

    useEffect(() => {
        if(errMessage.length) {
            setTimeout(() => setErrMessage(''), 5000);
        }
    }, [errMessage])

    return <div className="reg-auth-container">
        <form onSubmit={e => submitForm(e)} className="sign-up-form">
            { errMessage && <div className="error-box">{errMessage}</div> }

            <h2 className="title">Sign in</h2>
           
            <InputComponent
                type={"text"}
                placeHolder={"Email"}
                value={email}
                isRequired={true}
                onChangeFunction={setEmail}
            />
            <InputComponent
                type={"password"}
                placeHolder={"Password"}
                value={password}
                isRequired={true}
                onChangeFunction={setPassword}
            />

            <div className="button-container">
                <button className="form-submit-button" type="submit">Sign In</button>
            </div>
        </form>
    </div>
}

export default SignIn

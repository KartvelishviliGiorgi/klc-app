import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import InputComponent from '../InputComponent'

const SignUp = () => {
    const history = useHistory()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmial] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errMessage, setErrMessage] = useState('')

    const comparePasswords = () => {
        if(!password || password !== confirmPassword) {
            setErrMessage('Passwords are not same')

            setPassword('')
            setConfirmPassword('')

            return false
        }
        return true
    }

    const registerUser = async user => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)           
        }

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/signup`, requestOptions);
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

        if(!comparePasswords()) return

        const user = {
            name,
            lastName,
            email,
            password
        }

        setName('')
        setLastName('')
        setEmial('')
        setPassword('')
        setConfirmPassword('')

        registerUser(user)
    }

    useEffect(() => {
        if(errMessage.length) {
            setTimeout(() => setErrMessage(''), 5000);
        }
    }, [errMessage])

    return (
        <div className="reg-auth-container">
            <form onSubmit={e => submitForm(e)} className="sign-up-form">
                { errMessage && <div className="error-box">{errMessage}</div> }
                
                <h2 className="title">Sign Up</h2>
                
                <InputComponent
                    type={"text"}
                    placeHolder={"Name"}
                    value={name}
                    isRequired={true}
                    onChangeFunction={setName}
                />
                <InputComponent
                    type={"text"}
                    placeHolder={"Lastname"}
                    value={lastName}
                    isRequired={true}
                    onChangeFunction={setLastName}
                />
                <InputComponent
                    type={"text"}
                    placeHolder={"Email"}
                    value={email}
                    isRequired={true}
                    onChangeFunction={setEmial}
                />
                <InputComponent
                    type={"password"}
                    placeHolder={"Password"}
                    value={password}
                    isRequired={true}
                    onChangeFunction={setPassword}
                />
                <InputComponent
                    type={"password"}
                    placeHolder={"Confirm password"}
                    value={confirmPassword}
                    isRequired={true}
                    onChangeFunction={setConfirmPassword}
                />

                <div className="button-container">
                    <button className="form-submit-button" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp

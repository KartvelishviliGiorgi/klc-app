import { useState, createContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = props => {
    const [authoirized, setAuthorized] = useState(false)

    return (
        <AuthContext.Provider value={[authoirized, setAuthorized]}>
            {props.children}
        </AuthContext.Provider>
    )
}

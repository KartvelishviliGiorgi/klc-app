import { useState, useEffect } from "react"

const Users = () => {
    const [users, setUsers] = useState({})

    const getUsers = async() => {
        const response = await fetch('http://localhost:8000/users/')
        const data = await response.json()

        if(data.success) {
            setUsers(data.users)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return <>
        <div className="users-container">
            {users.length && users.map(user => 
                <div className="profile-card" key={user.email}>
                    <div className="card-header">
                    <div className="pic">
                        <img alt={user.name} src="https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.6435-9/67759691_1265573910283352_4593891517948493824_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=VkqFoWYjDW4AX8Rud9T&_nc_ht=scontent.ftbs4-1.fna&oh=10960b1e40b40967a275db0276fa53bc&oe=61291128" />
                    </div>
                    <div className="name">{user.name}</div>
                    <div className="name">{user.lastName}</div>
                    <div className="email">{user.email}</div>
                    </div>
                </div>
            )}
        </div>
    </>
}

export default Users

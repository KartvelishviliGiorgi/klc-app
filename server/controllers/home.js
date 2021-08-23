import { getUsers } from '../controllers/users.js'

export const homePage = (req, res) => {
    getUsers(req, res)
}

import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const protect = async(req, res, next) => {
    let token;

    if(req.headers.authorization) {
        token = req.headers.authorization
    }

    if(!token) {
        return res.status(500).send({ succses: false, error: 'Not authorized to accses this.' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.id)

        if(!user) {
            return res.status(404).send({ succses: false, error: 'No users found with this id.' })
        }

        req.user = user
        next()
    } catch(error) {
        return res.status(500).send({ succses: false, error: 'Not authorized to accses this.' })
    }
}

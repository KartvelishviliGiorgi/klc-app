import User from '../models/User.js'

export const signup = async(req, res) => {
    const user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await user.save()

        sendToken(user, 201, res)
    } catch(error) {
        res.status(500).send({ success: false, error: error.message })
    }
}

export const signin = async(req, res) => {
    const { email, password } = req.body

    if(!email || !password) {
        return res.status(400).send({ success: false, error: 'Plase enter email and password.' })
    }

    try {
        const user = await User.findOne({ email }).select('+password')

        const error = 'Invalid email or password'

        if(!user) {
            return res.status(404).send({ success: false, error })
        }

        const isMatch = await user.matchPassword(password)

        if(!isMatch) {
            return res.status(404).send({ success: false, error })
        }

        sendToken(user, 200, res)
    } catch(error) {
        res.status(500).send({ succses: false, error: error.message })
    }
}

export const getUsers = async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({ success: true, users })
    } catch(error) {
        res.status(500).send({ success: false, error: error.message })
    }    
}

export const deleteUser = async(req, res) => {
    const userId = req.params.userId

    try {
        const deletedUser = await User.deleteOne({_id: userId})
        res.status(200).send({ success: true, message: deletedUser })
    } catch(error) {
        res.status(500).send({ success: false, error: error.message })
    }
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).send({ success: true, token })
}

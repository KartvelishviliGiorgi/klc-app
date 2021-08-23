import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = mongoose.Schema({
    name: {type: String, required: true, min: 2, max: 16},
    lastName: {type: String, required: true, min: 2, max: 16},
    email: {type: String, required: true, min: 8, max: 32, unique: true},
    password: {type: String, require: true, min: 8, max: 1024, select: false},
    image: {type: String},
    registrationTime: {type: Date, default: Date.now},
})

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()  
})

UserSchema.methods.matchPassword = async function(password) {  
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.getSignedToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES})
}

export default mongoose.model('User', UserSchema)

import { Router as expressRouter } from 'express'

import { signup, signin, getUsers, deleteUser } from '../controllers/users.js'

const router = expressRouter()


router.post('/signup', signup)
router.post('/signin', signin)
router.get('/', getUsers);
router.delete('/:userId', deleteUser)


export default router

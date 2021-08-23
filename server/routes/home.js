import { Router as expressRouter } from 'express'

import { protect } from '../middleware/auth.js'

import { homePage } from '../controllers/home.js'

const router = expressRouter()

router.get('/', protect, homePage)

export default router

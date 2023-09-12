import express from 'express'

import { getShortestPath } from '../controllers/shortestPath'

const router = express.Router()

router.get('/', getShortestPath)

export { router as default }

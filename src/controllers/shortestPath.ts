import { Request, Response } from 'express'

import logger from '../common/logger'

import * as shortestPathService from '../services/shortestPath'

export const getShortestPath = async (req: Request, res: Response) => {
  try {
    const { products, startingPosition } = req.body
    if (!products || !startingPosition) return res.status(400).send('Invalid request')
    const data = await shortestPathService.getAll({ productIDs: products, startingPosition })
    res.status(200).send(data)
  } catch (e: any) {
    logger.error(e.message)
    res.status(500).send(e.message)
  }
}

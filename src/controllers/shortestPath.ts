import { Request, Response } from 'express'

import * as shortestPathService from '../services/shortestPath'
import logger from '../common/logger'

export const getShortestPath = async (req: Request, res: Response) => {
  try {
    const { products, startingPosition } = req.body
    if (!products || !startingPosition) return res.status(400).send('Invalid request')
    const data = await shortestPathService.getShortestPath({
      productIDs: products,
      startingPosition,
    })
    res.status(200).send(data)
  } catch (e: any) {
    logger.error(e.message)
    res.status(500).send(e.message)
  }
}

import fetch from 'node-fetch'

import { Product } from '../../types/product'
import { Point } from '../../types/point'
import { calculateDistance, cartesian } from '../common/math'
import { GetShortestPathParams } from '../../types/params'

const getProduct = async (productId: string): Promise<Product[]> => {
  const res = await fetch(`${process.env.GYMBEAM_API_URL}${productId}/positions`, {
    headers: {
      'x-api-key': process.env.GYMBEAM_API_KEY ?? '',
    },
  })
  const data = await res.json()
  return data
}

const findShortestPath = (products: Product[][], startingPosition: Point) => {
  const allPossibleProductRoutes: Product[][] = cartesian(...products)
  let minDistance = Infinity
  let shortestPath

  for (const currentProductRoute of allPossibleProductRoutes) {
    let totalDistance = 0
    for (let j = 0; j < currentProductRoute.length; j++) {
      if (j === 0) {
        totalDistance += calculateDistance(startingPosition, currentProductRoute[j])
      } else {
        totalDistance += calculateDistance(currentProductRoute[j - 1], currentProductRoute[j])
      }
    }
    if (totalDistance < minDistance) {
      minDistance = totalDistance
      shortestPath = currentProductRoute
    }
  }

  return { distance: minDistance, pickingOrder: shortestPath }
}

export const getAll = async ({ productIDs, startingPosition }: GetShortestPathParams) => {
  const productPromises = productIDs.map(getProduct)
  const products = await Promise.all(productPromises)
  return findShortestPath(products, startingPosition)
}

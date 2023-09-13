import { Point } from '../../types/point'
import { Product } from '../../types/product'
import { findShortestPath } from './shortestPath'

describe('findShortestPath', () => {
  const startPoint: Point = { x: 0, y: 0, z: 0 }
  it('should return undefined, when empty array of products is passed', () => {
    expect(findShortestPath([], startPoint)).toBeUndefined()
  })

  it('should output correct shortest path', () => {
    const startingPosition = { x: 0, y: 0, z: 0 }
    const products = [
      [
        { x: 1, y: 1, z: 1, productId: '1', positionId: '1' },
        { x: 2, y: 2, z: 2, productId: '2', positionId: '2' },
        { x: 3, y: 3, z: 3, productId: '3', positionId: '3' },
      ],
      [
        { x: 4, y: 4, z: 4, productId: '4', positionId: '4' },
        { x: 5, y: 5, z: 5, productId: '5', positionId: '5' },
        { x: 6, y: 6, z: 6, productId: '6', positionId: '6' },
      ],
    ] as Product[][]
    expect(findShortestPath(products, startingPosition)).toEqual({
      distance: 6.928203230275509,
      pickingOrder: [
        { productId: '1', positionId: '1' },
        { productId: '4', positionId: '4' },
      ],
    })
  })
})

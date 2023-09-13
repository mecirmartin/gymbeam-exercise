import { Point } from '../../types/point'
import { calculateDistance, cartesian } from './math'

describe('math', () => {
  describe('calculateDistance', () => {
    // Define some example points for testing
    const pointA: Point = { x: 1, y: 2, z: 3 }
    const pointB: Point = { x: 4, y: 5, z: 6 }
    const pointC: Point = { x: 0, y: 0, z: 0 }

    it('calculates the distance between two points correctly', () => {
      expect(calculateDistance(pointA, pointB)).toBeCloseTo(5.1962, 4)
    })

    it('returns 0 for the distance between the same point', () => {
      expect(calculateDistance(pointA, pointA)).toBe(0)
    })

    it('calculates the distance between a point and the origin correctly', () => {
      expect(calculateDistance(pointA, pointC)).toBeCloseTo(3.7417, 4)
    })
  })

  describe('cartesian', () => {
    it('returns the Cartesian product of two arrays', () => {
      const arr1 = [1, 2]
      const arr2 = ['a', 'b']

      const result = cartesian(arr1, arr2)

      const expected = [
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
      ]

      expect(result).toEqual(expected)
    })

    it('returns an empty array if any of the input arrays is empty', () => {
      const arr1: number[] = []
      const arr2 = ['a', 'b']

      const result = cartesian(arr1, arr2)

      expect(result).toEqual([])
    })

    it('returns an empty array if no input arrays are provided', () => {
      const result = cartesian()

      expect(result).toEqual([])
    })
  })
})

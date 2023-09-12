import { Point } from '../../types/point'

export const cartesian = (...a: any[]) =>
  a.reduce((a, b) => a.flatMap((d: any) => b.map((e: any) => [d, e].flat())))

export const calculateDistance = (point1: Point, point2: Point) => {
  const a = point2.x - point1.x
  const b = point2.y - point1.y
  const c = point2.z - point1.z

  return Math.sqrt(a * a + b * b + c * c)
}

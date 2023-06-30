export type Location = {
  code: string
  description: string
  id: number
  latitude: number
  longitude: number
  name: string
  parent: number
  type: 'CITY' | 'COUNTRY' | 'AIRPORT'
}

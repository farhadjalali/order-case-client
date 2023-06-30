import { FC } from 'react'
import { Component, Table } from './style'
import { $t } from '../../i18n'
import { useQuery } from 'react-query'
import { Location } from '../../types'

type Props = {
  reportType: string
}

export const AirportsTable: FC<Props> = ({ reportType }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [reportType],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/travel/locations?type=${reportType}`).then((res) => res.json()),
  })

  if (isLoading) return <Component>{$t.LOADING}</Component>

  if (error) return <Component>{$t.LOADING_FAILED}</Component>

  return (
    <Component>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((airport: Location) => (
            <tr key={airport.id}>
              <td>{airport.id}</td>
              <td>{airport.code}</td>
              <td>{airport.latitude}</td>
              <td>{airport.longitude}</td>
              <td>{airport.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Component>
  )
}

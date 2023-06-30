import { Component, Title } from './style'
import { AirportsTable } from '../../components/airports-table/AirportsTable'
import { $t } from '../../i18n'

export const PageHome = () => {
  return (
    <Component>
      <Title>{$t.US_AIRPORTS}</Title>
      <AirportsTable reportType="us-airports" />
    </Component>
  )
}

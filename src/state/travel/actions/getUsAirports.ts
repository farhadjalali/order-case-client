import { airportsSet, loadingStatusSet } from '../reducer'
import { LoadingStatus } from '../../../types'
import { apiCall } from '../../../utils'
import { Dispatch } from '@reduxjs/toolkit'

export const getUsAirports = () => (dispatch: Dispatch) => {
  dispatch(loadingStatusSet(LoadingStatus.Loading))

  apiCall('/travel/locations')
    .then((res) => {
      dispatch(airportsSet(res.data))
      dispatch(loadingStatusSet(LoadingStatus.Succeeded))
    })
    .catch(() => {
      dispatch(loadingStatusSet(LoadingStatus.Failed))
    })
}

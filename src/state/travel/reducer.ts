import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus, Location } from '../../types'

export interface TravelState {
  airports: Location[]
  loadingStatus: LoadingStatus
}

const slice = createSlice({
  name: 'travel',
  initialState: {
    airports: [],
    loadingStatus: LoadingStatus.Idle,
  } as TravelState,

  reducers: {
    airportsSet: (state, action: PayloadAction<Location[]>) => {
      state.airports = action.payload
    },
    loadingStatusSet: (state, action: PayloadAction<LoadingStatus>) => {
      state.loadingStatus = action.payload
    },
  },
})

export const { airportsSet, loadingStatusSet } = slice.actions

export const travelReducer = slice.reducer

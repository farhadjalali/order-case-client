import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MOBILE_WIDTH } from '../../constants'

export interface GeneralState {
  isMobile: boolean
}

const slice = createSlice({
  name: 'general',
  initialState: {
    isMobile: window.innerWidth < MOBILE_WIDTH,
  } as GeneralState,

  reducers: {
    isMobileSet: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
  },
})

export const { isMobileSet } = slice.actions

export const generalReducer = slice.reducer

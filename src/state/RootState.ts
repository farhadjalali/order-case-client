import { useSelector } from 'react-redux'
import { GeneralState } from './general/general-reducer'

export interface RootState {
  general: GeneralState
}

export const getState = () => useSelector<RootState, RootState>((state: RootState) => state)
export type GetStateFunction = () => RootState

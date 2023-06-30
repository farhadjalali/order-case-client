import { AnyAction, combineReducers, configureStore as reduxConfigureStore, Store } from '@reduxjs/toolkit'
import { travelReducer } from './travel/reducer'

const rootReducer = combineReducers({
  general: travelReducer,
})

export function configureStore(): Store<unknown, AnyAction> {
  return reduxConfigureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: process.env.NODE_ENV !== 'development',
      }),
  })
}

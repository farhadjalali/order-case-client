import { AnyAction, combineReducers, configureStore as reduxConfigureStore, Store } from '@reduxjs/toolkit'
import { generalReducer } from './general/general-reducer'

const rootReducer = combineReducers({
  general: generalReducer,
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

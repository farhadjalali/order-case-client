import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './AppRoutes'
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary'
import { configureStore } from './state/configureStore'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import reportWebVitals from './utils/web-vitals'

const store = configureStore()

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <StrictMode>
          <AppRoutes />
        </StrictMode>
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()

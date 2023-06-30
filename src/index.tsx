import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './AppRoutes'
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary'
import { configureStore } from './state/configureStore'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import reportWebVitals from './utils/web-vitals'
import { QueryClient, QueryClientProvider } from 'react-query'

const store = configureStore()

const container = document.getElementById('root')
const queryClient = new QueryClient()

createRoot(container!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <StrictMode>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
          </QueryClientProvider>
        </StrictMode>
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>
)

reportWebVitals()

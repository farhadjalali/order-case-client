// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { $t } from '../../i18n'
import { Component, Details } from './style'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  //componentDidCatch(error, errorInfo) {
  // You can also log the error to an error reporting service
  // logErrorToMyService(error, errorInfo)
  //}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Component>
          <p>{$t.GLOBAL_ERROR}</p>
          <hr />

          <Details>
            <h2>More info:</h2>
            {this.state.error.stack}
          </Details>
        </Component>
      )
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import theme from './themes/theme'
import routes from './routes'
import './App.scss'
export const Base = ({ children }) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  </StylesProvider>
)

Base.propTypes = {
  children: PropTypes.node.isRequired
}

const App = () => (
  <Base>
        {routes}
  </Base>
)


export default App

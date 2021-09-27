import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { theme } from './components/Theme/theme'
import { ThemeProvider } from '@emotion/react'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)

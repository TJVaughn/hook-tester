import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const appElement = document.getElementById('app')
ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    appElement
)
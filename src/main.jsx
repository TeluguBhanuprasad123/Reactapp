import React from 'react'
import ReactDOM from 'react-dom/client'

import Master from './compoents/Master.jsx';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Master />
    </BrowserRouter>
  </React.StrictMode>,
)

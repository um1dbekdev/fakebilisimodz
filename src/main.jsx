import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header'
import App from './s'
import Left from './left'
import Card from './card'
import Beck from './beckmalumot'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='w-[1500px] m-auto overflow-hidden'>
  <Header/>
  <App/>
  <Left/>
  <Card/>
  <Beck/>
  </div>
  </React.StrictMode>,
)

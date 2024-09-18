import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="chai aur react" //evaluated expression

const reactElement = React.createElement(
  'p',{href:'https://google.com',target:'_blank'},'click me to visit',
   anotherUser
)

createRoot(document.getElementById('root')).render(

  //<App />
  //anotherElement
  reactElement
)

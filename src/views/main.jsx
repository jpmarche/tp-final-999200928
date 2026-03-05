import { StrictMode , useState} from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/main.css'
// import {App} from '../components/App'
import {RouterApp} from '../router/RouterApp'
import { ChatProvider } from '../context/ChatContext'




createRoot(document.getElementById('root')).render(
    <StrictMode>
  <ChatProvider>
    <RouterApp/>
    </ChatProvider>
   </StrictMode>
)

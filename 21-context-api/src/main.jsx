import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './contexts/ThemeContext.jsx'
import TextColorContext from './contexts/TextColorContext.jsx'

createRoot(document.getElementById('root')).render(
<TextColorContext>
    <ThemeContext>
      <App />
    </ThemeContext>
    </TextColorContext>

)

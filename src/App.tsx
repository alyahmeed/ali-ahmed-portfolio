import Home from './pages/Home'
import { LocaleProvider } from './i18n/LocaleContext'
import { ThemeProvider } from './theme/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Home />
      </LocaleProvider>
    </ThemeProvider>
  )
}

export default App

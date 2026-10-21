import Home from './pages/Home'
import { LocaleProvider } from './i18n/LocaleContext'
import { ThemeProvider } from './theme/ThemeContext'
import { useAmbientMotion } from './hooks/useAmbientMotion'

function App() {
  useAmbientMotion()

  return (
    <ThemeProvider>
      <LocaleProvider>
        <Home />
      </LocaleProvider>
    </ThemeProvider>
  )
}

export default App

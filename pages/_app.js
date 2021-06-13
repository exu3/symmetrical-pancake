import { ThemeProvider } from 'theme-ui'
import '../styles/globals.css'
import theme from '../components/theme'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App

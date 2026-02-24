import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Header />
      <Home />
    </Provider>
  )
}

export default App

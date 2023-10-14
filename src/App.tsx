import './App.css'
import { useAuthContext } from './Context/AuthContext'
import logo from './logo.svg'

function App(): JSX.Element {
  const { user, dispatch } = useAuthContext()
  dispatch({
    type: 'GET_USER',
    payload: { name: 'alfred', job: 'develop' },
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, {user ? user.name : 'paso'}
        </a>
      </header>
    </div>
  )
}

export default App

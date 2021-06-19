import Login from './pages/layout/Login'
import Signup from './pages/layout/Signup'
import Layout from './pages/layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App

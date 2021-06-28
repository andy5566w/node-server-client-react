import Login from './pages/layout/Login'
import Signup from './pages/layout/Signup'
import Layout from './pages/layout/Layout'
import Home from './pages/layout/Home'
import ArticleEditor from './components/article/ArticleEditor'
import ArticleListsItem from './components/article/SubjectLists'
import { Route, Switch, Redirect } from 'react-router-dom'
import Banner from './components/Banner'
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
          <Route path="/home">
            <Banner />
            <Home />
          </Route>
          <Route path="/article/:id">
            <Banner />
            <ArticleListsItem />
          </Route>
          <Route path="/editor">
            <ArticleEditor />
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

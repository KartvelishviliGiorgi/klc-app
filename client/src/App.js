import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import HomePage from './Pages/Home'
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage'
import ErrorPage from './Pages/Error'

import { AuthProvider } from './context/AuthorizationContext'


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>        
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App

import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './component/header'
import Home from './component/home'
import Login from './component/login'
import Register from './component/register'
import NewPost from './component/newPost'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <div className="container"></div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/addNewPost' component={NewPost} />         
              
              <Route render={() => (<div className="error404">
                                      <h1>Error 404</h1>
                                      <h2>Page not found!</h2>
                                    </div>)} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <main>
          <BrowserRouter>
            <div>
              <Header/>
              <nav>
                <ul>
                  <li><Link to='/'>Landing</Link></li>
                  <li><Link to='/dashboard'>Notes Dashboard</Link></li>
                </ul>
              </nav>
              <Route exact path='/' component={Landing}/>
              <Route exact path={'/dashboard'} component={Dashboard}/>
            </div>
          </BrowserRouter>
        </main>
    );
  }
}

export default App;

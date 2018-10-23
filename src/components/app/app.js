import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

class App extends React.Component {
  render() {
    return (
        <main>
          <BrowserRouter>
            <div>
              <nav>
                <ul>
                  <li><Link to='/'>Landing</Link></li>
                  <li><Link to='/dashboard'>Card Dashboard</Link></li>
                </ul>
              </nav>
              <Route exact path={'/dashboard'} component={Dashboard}/>
            </div>
          </BrowserRouter>
        </main>
    );
  }
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Edit } from './pages/Edit'

import { Header } from './components/Header';

export function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/create" component={ Create }/>
          <Route path="/edit" component={ Edit } />
        </Switch>      
    </Router>
  );
}
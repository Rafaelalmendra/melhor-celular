import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Edit } from './pages/Edit'

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/global.scss'

export function App() {
  return (
    <Router>
        <div className="root">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/create" component={ Create }/>
          <Route path="/edit/:id" component={ Edit } />
        </Switch>
      </div>
        <Footer />    
    </Router>
  );
}
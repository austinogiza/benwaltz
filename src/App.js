import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './container/Layout'
import  ScrollRestore from './components/ScrollRestore'
import Reviews from './pages/Reviews';
import About from './pages/About';

import Events from './pages/Events';
import Top from './components/Top';

import {createBrowserHistory} from 'history'
function App() {

  const history = createBrowserHistory()
  return (
   <>
  <Router history={history}>
<Layout>
<ScrollRestore />
<Top/>
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/reviews' component={Reviews}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/events' component={Events}/>
    <Route component={NotFound}/>
    </Switch>
</Layout>
  </Router>
   </>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './container/Layout'
function App() {
  return (
   <>
  <Router>
<Layout>

  
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/contact' component={Contact}/>
    <Route component={NotFound}/>
    </Switch>
</Layout>
  </Router>
   </>
  );
}

export default App;

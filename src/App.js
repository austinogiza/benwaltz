import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
   <>
  <Router>

    <Switch>
    <Route exact path='/' component={Home}/>
    <Route component={NotFound}/>
    </Switch>
  </Router>
   </>
  );
}

export default App;

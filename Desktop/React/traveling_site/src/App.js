
import './App.css';
import Navbar from './component/Navbar'
import Services from './component/Services'
import Products from './component/Products'
import SignUp from './component/Sign_Up'
import Home from './component/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
     <Navbar/>
      <Switch>
      <Route  path='/home' component={Home} />
      <Route  path='/Services' component={Services} />
      <Route  path='/Products' component={Products} />
      <Route  path='/Sign-UP' component={SignUp} />
      </Switch>
     </Router>

     
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/homepage';
import Login from './component/login';
import About from './component/about';
import MyNavbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './component/Contact';
import Register from './component/Register';
import './component/styles/global.css'


function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;

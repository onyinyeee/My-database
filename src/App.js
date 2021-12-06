import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <h1> hello movies</h1>
        </Route>
        <Route path="/new">
        <h1> hello details</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 import { MainPage } from './components/pages/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <MainPage />
        </Route>
        <Route path="/movie/:id">
        <h1> hello details</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 import { MainPage } from './components/pages/MainPage';
 import { DetailsPage} from './components/pages/DetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <MainPage />
        </Route>
        <Route path="/movie/:id">
        <DetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
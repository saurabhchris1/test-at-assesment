import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./hoc/Home/Home";

function App() {
  return (
      <Switch>
        <Route path='/'exact component={Home}/>
        <Redirect to='/' component={Home}/>
      </Switch>
  );
}

export default App;

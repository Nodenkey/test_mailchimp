import './App.css';
import {Switch, Route} from 'react-router-dom';
import Register from "./components/register/Register";
import Success from "./components/success/Success";
import Fail from "./components/fail/Fail";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Register}/>
        <Route path='/success' component={Success}/>
        <Route path='/fail' component={Fail}/>
      </Switch>

    </div>
  );
}

export default App;

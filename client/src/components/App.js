import {Route, Switch} from "react-router-dom";
import "../App.css"
import Speech from "./Speech"
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <Switch>
      <Route exact path="/Speech">
        <Speech/>
      </Route> 
      <Route exact path="/">
          <Login />
      </Route>
      <Route exact path="/Home">
          <Home />
      </Route> 
    </Switch> 

  )
}

export default App
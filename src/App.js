
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/rainfallmap">
          {/* Insert rainfall page */}
          <Home />
        </Route>
        <Route path="/recommendedgear">
          {/* Insert recommended gear page */}
          <Home />
        </Route>
        <Route path="/favourites">
          {/* Insert favourites page */}
          <Home />
        </Route>
        <Route path="/recommendedlocation">
          {/* Insert recommended location page */}
          <Home />
          </Route>
        <Route path="/settings">
          {/* Insert settings page */}
          <Home />
        </Route>
        <Route component={Error}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

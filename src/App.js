
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Rainfall from './pages/Rainfall'
import Favourites from './pages/Favourites'
import RecGear from './pages/RecGear'
import RecLocation from './pages/RecLocation'
import Settings from './pages/Settings'
import Weather from './pages/Weather'
// Lorenzo's draft 1 of weather page
import WeatherPage from './pages/WeatherPage'
import Error from './pages/Error'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rainfallmap">
          <Rainfall />
        </Route>
        <Route path="/recommendedgear">
          <RecGear />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/recommendedlocation">
          <RecLocation />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/weatherpage/:searchLocation">
          <Weather />
			    {/* <WeatherPage /> */}
        </Route>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

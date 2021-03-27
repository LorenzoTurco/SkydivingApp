
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Rainfall from './pages/Rainfall'
import Favourites from './pages/Favourites'
import RecGear from './pages/RecGear'
import RecLocation from './pages/RecLocation'
import Settings from './pages/Settings'
import Weather from './pages/Weather'
import Error from './pages/Error'

function App() {

  useEffect(() => {
    let currentSettings = localStorage.getItem('settings')
    if (currentSettings === null) {
      localStorage.setItem('settings','Metric')
    }

  },[])

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
        </Route>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

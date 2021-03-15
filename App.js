import React from "react";
import Home from "./Home";
import WeatherPage from "./WeatherPage";
import {Route, Link} from "react-router-dom";


  function App(){

    return(

      <div>

        <Route exact path = "/" component={Home} />
        <Route exact path = "/WeatherPage" component={WeatherPage} />


      </div>


      );

    }
  export default App;




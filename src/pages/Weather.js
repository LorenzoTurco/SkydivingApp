  
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import DisplayData from '../components/DisplayData'
import AddFav from '../components/AddFav'
import BackButton from '../components/BackButton'
import LocationIcon from '../assets/location.png'

import '../components/Navigation.css'

const Weather = () => {
    const history = useHistory()
    const [data, setData] = useState(history.location.state)
    const { searchLocation } = useParams()
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

    useEffect(() => {
        setData(history.location.state)
    }, [searchLocation, history.location.state])

    return (
        <div>
            <BackButton />
            {/* AddFav to create a bookmark icon that favourites saved locations */}
            <AddFav
                locationName={history.location.state.city.name}
                countryName={history.location.state.city.country}
            />
            <Searchbar />
            <div className="generalInfo">
                <p className="currentTemp"> {parseInt(data.list[0].main.temp)}&#176; </p>
                <p className="location"> 
                    {data.city.name}, {data.city.country}
                    <input
                        type="image"
                        src={LocationIcon}
                        style={{width:"20px", height:"25px", marginRight:"27vw", paddingTop:"5px"}}
                        alt="location"
                    />
                </p>
                <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} style={{height:"70px", 
                    width:"70px",float:"right", marginTop:"7vh", marginRight:"25vw"}}/>
                <p className="weatherMain">
                    {data.list[0].weather[0].main} <br/>
                </p>
                {/* More specific description of the main weather focus.
                    e.g. if 'Clouds', the description could say 'few clouds' all the way to 'overcase clouds' */}
                <p className="weatherDescription">
                    <p>{data.list[0].weather[0].description}</p>
                </p>
            </div>
            {/* Display data for showing the forecast using a swiper */}
            <DisplayData data={data} />
        </div>
    )
}

export default Weather


import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import DisplayData from '../components/DisplayData'
import AddFav from '../components/AddFav'
import BackButton from '../components/BackButton'

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
            <Searchbar />
            <BackButton />
            <h1> {parseInt(data.list[0].main.temp)}&#176; </h1>
            <h1> 
                {parseInt(data.list[0].wind.speed)}mph <br/>
                {/* Gets the wind direction using some calculation */}
                {directions[Math.round(((data.list[0].wind.deg %= 360) < 0 ? data.list[0].wind.deg + 360 : data.list[0].wind.deg) / 45) % 8]}
            </h1>
            <h2>
                {data.list[0].weather[0].main} <br/>
                {/* More specific description of the main weather focus.
                    e.g. if 'Clouds', the description could say 'few clouds' all the way to 'overcase clouds' */}
                {data.list[0].weather[0].description} <br/>
                <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} />
            </h2>
            <h3> {data.city.name}, {data.city.country}</h3>
            {/* AddFav to create a bookmark icon that favourites saved locations */}
            <AddFav
                locationName={history.location.state.city.name}
                countryName={history.location.state.city.country}
            />
            {/* Display data for showing the forecast using a swiper */}
            <DisplayData data={data} />
        </div>
    )
}

export default Weather


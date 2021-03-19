import SearchIcon from '../assets/search.png'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

const Searchbar = () => {
    const [location, setLocation] = useState('')
    // const [weatherData, setWeatherData] = useState([])
    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!location) {
            return
        }

        const tempData = await getLocationWeather(location)

        if (tempData.cod === "200") {
            // console.log("Valid location")
            // console.log(tempData.list)
            history.push({
                pathname: '/weatherpage',
                weatherData: tempData
            })
        } else {
            // console.log("Invalid location")
            setLocation('')
        }

    }

    const getLocationWeather = async (location) => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&unit=metric`
        const result = await fetch(url)
        const data = await result.json()
        return data
    }

    return (
        <form className="searchbar" onSubmit={onSubmit}>
            <input
                style={{}}
                value={location}
                placeholder={"Search location"}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                type="image"
                src={SearchIcon}
                style={{ maxWidth: "20px" }}
                alt="Submit"
            />
        </form>
    )
}

export default Searchbar

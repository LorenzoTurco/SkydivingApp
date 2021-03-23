  
import SearchIcon from '../assets/search.png'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

// Allows searches from other pages to get the weather
const Searchbar = () => {
    const [location, setLocation] = useState('')
    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!location) {
            return
        }
        const tempData = await getLocationWeather(location)
        if (tempData.cod === "200") {
            history.push({
                pathname: '/weatherpage/'+tempData.city.name,
                weatherData: tempData
            })
        } else {
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
            <div className="mark">
                <img  src={SearchIcon} className="leftimg"  alt="" style={{width:"3vh", height:"3vh"}}/>
                <input className = "search"
                    style={{}}
                    value={location}
                    placeholder={"Search location"}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
        </form>
    )
}

export default Searchbar
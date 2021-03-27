import SearchIcon from '../assets/search.png'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

// Searchbar for finding locations and then passing data to the weather page upon succesfully calling the API.
const Searchbar = () => {
    // Use input state
    const [location, setLocation] = useState('')

    // Allows use of history to push and redirect.
    const history = useHistory()

    // When user submits searchbar
    // Call API, if succesful redirect.
    // If non-successful code then reset field and stay.
    const onSubmit = async (e) => {
        e.preventDefault()
        if(!location) {
            return
        }
        const tempData = await getLocationWeather(location)
        if(tempData.cod==="200"){
            history.push({
                pathname: '/weatherpage/'+tempData.city.name,
                state: tempData
            })
        } else {
            setLocation('')
        }
    }

    // API call
    const getLocationWeather = async (location) => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=${localStorage.getItem('settings')}`
        const result = await fetch(url)
        const data = await result.json()
        return data
    }

    return (
        <form className="searchbar" onSubmit={onSubmit}>
            <input className = "search"
                style={{}}
                value={location}
                placeholder={"Search location"}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input className="leftimg"
                type="image"
                src={SearchIcon}
                style={{ maxWidth: "20px" }}
                alt="Submit"
            />
        </form>
    )
}

export default Searchbar

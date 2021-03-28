import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Favourites.css';
import BackButton from '../components/BackButton'

const API_KEY = process.env.REACT_APP_API_KEY;


const Favourites = () => {
    const [favouritesArray, setFavouritesArray] = useState(getFavourites())
    const [location, setLocation] = useState({})
    const history = useHistory()

    function getFavourites(){ //returns an array of JSON objects marked as favorites from localstorage
        let tempObject = JSON.parse(localStorage.getItem('favourites'))
        return tempObject
    }

    //redirects user to the relevant weather page based on form submission.
    const onSubmit = async (e) => {
        e.preventDefault()

        const tempData = await getLocationWeather(location)
        if(tempData.cod==="200"){
            history.push({
                pathname: '/weatherpage/'+tempData.city.name,
                state: tempData
            })
        }
    }

    //Data is fetched
    const getLocationWeather = async (location) => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=${localStorage.getItem('settings')}`
        const result = await fetch(url)
        const data = await result.json()
        return data
    }

    const [buttonNames, setButtonNames] = useState("")

    useEffect(() => {
        if(favouritesArray){
            setButtonNames(
                (favouritesArray.favourite).map(favourite => 
                    <div className="wrapper">
                        <button className="button" 
                            value={favourite.name +"," + favourite.country}
                            onClick={(e) => setLocation(e.target.value)}
                        >
                            {favourite.name + ", "+favourite.country }
                        </button>
                    </div>
                )
            )
        }else{
            console.log("empty")
        }
    },[favouritesArray])
    
    return(

        <div className="background">
            <BackButton/>
                
            <form onSubmit={onSubmit}>  
                <div>
                    {buttonNames}
                </div>   
            </form>
        </div>
    )}


    export default Favourites
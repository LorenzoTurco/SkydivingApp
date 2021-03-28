import { Autoplay } from 'swiper'
import { useState } from 'react'
import BackButton from '../components/BackButton'

const Settings = () => {
    const [measurement, setMeasurement] = useState(localStorage.getItem('settings'))

    // Changes the unit of measurement for weather in localstorage
    const switchUnit = () => {
        let currentUnit = localStorage.getItem('settings')
        if (currentUnit === 'Metric') {
            localStorage.setItem('settings', 'Imperial')
            setMeasurement('Imperial')
        } else {
            localStorage.setItem('settings', 'Metric')
            setMeasurement('Metric')
        }
    }

    // Clears out the favourites in local storage
    const clearFavourites = () => {
        localStorage.removeItem('favourites')
    }

    return (
        <div>
            <BackButton /><br></br>
            <label className="changeUnit">
                <button className="changeUnitButton"
                    onClick={switchUnit}
                >
                    Change Unit
                </button>
                {/* Simply lists the unit of measurement
                    If you want can put inside the button. Doesn't matter where it is
                    as long as it's there. */}
                {measurement}
            </label> 
            
            <button className="clearFavButton"
                onClick={clearFavourites}
            >
                Clear Favourites
            </button>
            
        </div>
    )
}

export default Settings

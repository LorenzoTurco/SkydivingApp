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
            <BackButton />
            <label>
                <button 
                    onClick={switchUnit}
                >
                    Change Unit:
                </button>
                {/* Simply lists the unit of measurement */}
                {measurement}
            </label>
            
            <button 
                onClick={clearFavourites}
            >
                Clear Favourites
            </button>
            
        </div>
    )
}

export default Settings
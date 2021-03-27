import BackButton from '../components/BackButton'

const Settings = () => {

    const switchUnit = () => {
        let currentUnit = localStorage.getItem('settings')
        if (currentUnit === 'Metric') {
            localStorage.setItem('settings', 'Imperial')
        } else {
            localStorage.setItem('settings', 'Metric')
        }
    }

    const clearFavourites = () => {
        localStorage.removeItem('favourites')
    }

    return (
        <div>
            <BackButton />
            <label>
                <button onClick={switchUnit}>Change Unit:</button>
                {localStorage.getItem('settings')}
            </label>
            
            <button onClick={clearFavourites}>Clear Favourites</button>
            
        </div>
    )
}

export default Settings

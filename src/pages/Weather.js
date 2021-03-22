import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import DisplayData from '../components/DisplayData'
import AddFav from '../components/AddFav'

const Weather = () => {
    const history = useHistory()
    const [data, setData] = useState(history.location.state)
    const { searchLocation } = useParams()

    useEffect(() => {
        setData(history.location.state)
    }, [searchLocation, history.location.state])

    return (
        <div>
            <Searchbar />
            <h1> {data.city.name} </h1>
            <AddFav
                locationName={history.location.state.city.name}
                countryName={history.location.state.city.country}
            />
            <DisplayData data={data} />
        </div>
    )
}

export default Weather


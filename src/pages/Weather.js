import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import DisplayData from '../components/DisplayData'

const Weather = () => {
    const history = useHistory()
    const [data, setData] = useState(history.location.state)
    const { searchLocation } = useParams()

    useEffect(() => {
        setData(history.location.state)
    }, [searchLocation])

    return (
        <div>
            <Searchbar />
            <h1> {data.city.name} </h1>
            <DisplayData data={data} />
        </div>
    )
}

export default Weather


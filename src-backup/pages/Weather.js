import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Weather = () => {

    const history = useHistory()
    const data = history.location.state

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default Weather

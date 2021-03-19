import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import SearchIcon from '../assets/search.png'
// import { Chart } from "frappe-charts/dist/frappe-charts.min.esm"

const API_KEY = process.env.REACT_APP_API_KEY;

const Weather = () => {
    const history = useHistory()
    const [data, setData] = useState(history.location.weatherData)
    const [location, setLocation] = useState(data.city.name)

    const [test, setTest] = useState(true)

    const placeName = data.city.name
    const placeCountry = data.city.country
    const [graphLabels, setGraphLabels] = useState([])
    const [graphData, setGraphData] = useState([])

    // Weather info needed:
    // temp
    // clouds
    // wind

    // TO DO LIST
    // Use mapping for each array of days to create 5 graphs

    const updateInfo = async (e) => {
        if (e) {
            e.preventDefault()
        }
        if (!location) {
            return
        }

        const tempData = await getLocationWeather(location)
        if (tempData.cod === "200") {
            setData(tempData)
        } else {
            setLocation('')
            return
        }
        setGraphLabels(await getLabels())
        setGraphData(await getDataPerDay())

        // const chartList = [null, null, null, null, null]
        // let i
        // let tempGraphData = {
        //     labels: graphLabels,
        //     datasets: [
        //         {
        //             name: "Temperature", type: "line",
        //             values: []
        //         }
        //     ]
        // }
        // let chart
        // for (i = 0; i < 5; i++) {
        //     tempGraphData.datasets[0].values = graphData[i]
        //     console.log("chart" + i.toString())
        //     chart = new Chart("#chart" + i.toString(), {
        //         title: "Temperature 5 day forecast",
        //         data: tempGraphData,
        //         type: 'line',
        //         height: 250,
        //         colors: ['#7cd6fd', '#743ee2']
        //     })
        //     chartList[i] = chart
        // }

        // console.log(chartList)
    }

    useEffect(() => {
        updateInfo()
    }, [])

    // Gets list of temperatures per day
    // Each subarray is a day
    // Each day has 8 temperatures
    const getDataPerDay = () => {
        let currentDay = 0
        let currentHour = 0
        let i
        let dataPerDay = [[], [], [], [], []]
        for (i = 0; i < data.cnt; i++) {
            dataPerDay[currentDay][currentHour] = data.list[i].main.temp
            if (i % 8 === 0 && i > 0) {
                currentDay += 1
            }
            currentHour += 1
        }
        return dataPerDay
    }

    // Get the time labels
    // First one being the one closest to the current time.
    const getLabels = () => {
        let labels = []
        let tempTime
        let i
        for (i = 0; i < 8; i++) {
            tempTime = data.list[i].dt_txt.split(" ")
            labels.push(tempTime[1])
        }
        return labels
    }

    // Get weather data from API
    const getLocationWeather = async (location) => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
        const result = await fetch(url)
        const data = await result.json()
        return data
    }

    return (
        <div>
            {/* <div id="chart0"></div>
            <div id="chart1"></div>
            <div id="chart2"></div>
            <div id="chart3"></div>
            <div id="chart4"></div> */}

            <form onSubmit={updateInfo}>
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
            <p>{graphLabels}</p>
            <p>{placeName}</p>
            <p>{placeCountry}</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default Weather

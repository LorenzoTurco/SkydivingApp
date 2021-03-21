import { useEffect, useState } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination])

const DisplayData = (data) => {
    const [slides, setSlides] = useState([]);
    const labels = []
    const dataPerDay = []

    // Gets the data for each day in arrays of 8
    // Each item in array of 8 has 4 elements: temp, wind direction, wind speed, cloud coverage (%)
    const getDataPerDay = () => {
        let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        let tempData = [[],[],[],[],[],[],[],[]]
        let currentHour = 0
        let windDirection
        for (let i=0; i < data.data.list.length; i++) {
            windDirection = parseInt(data.data.list[i].wind.deg)
            windDirection = [Math.round(((windDirection %= 360) < 0 ? windDirection + 360 : windDirection) / 45) % 8];
            tempData[currentHour] = {
                temp: data.data.list[i].main.temp,
                windDirection: directions[windDirection],
                windSpeed: parseInt(data.data.list[i].wind.speed),
                cloudCover: data.data.list[i].clouds.all
            }
            if((i+1)%8 === 0) {
                dataPerDay.push(tempData.slice(0))
                currentHour = 0
            } else {
                currentHour += 1
            }
        }
    }

    // Get the time strings, starting from the closest time with data.
    const getLabels = () => {
        let tempTime
        for (let i = 0; i < 8; i++) {
            tempTime = data.data.list[i].dt_txt.split(" ")[1]
            labels.push(tempTime.substring(0, tempTime.length-3))
        }
    }

    // Update the slides to display the data
    const updateSlides = () => {
        let tempSlides = []
        for (let i=0; i < 5; i++) {
            tempSlides.push(
                <SwiperSlide key={`slide-${i*2}`}>
                    <div style={MultiColumn}>
                        <div style={Column}>
                            {labels[0]} <br/>
                            {dataPerDay[i][0].temp}&#176; <br/>
                            {dataPerDay[i][0].windDirection} <br/>
                            {dataPerDay[i][0].windSpeed}mph<br/> 
                            {dataPerDay[i][0].cloudCover}%
                        </div>
                        <div style={Column}>
                            {labels[1]} <br/>
                            {dataPerDay[i][1].temp}&#176; <br/>
                            {dataPerDay[i][1].windDirection} <br/>
                            {dataPerDay[i][1].windSpeed}mph<br/> 
                            {dataPerDay[i][1].cloudCover}%
                        </div>
                        <div style={Column}>
                            {labels[2]} <br/>
                            {dataPerDay[i][2].temp}&#176; <br/>
                            {dataPerDay[i][2].windDirection} <br/>
                            {dataPerDay[i][2].windSpeed}mph<br/>
                            {dataPerDay[i][2].cloudCover}%
                        </div>
                        <div style={Column}>
                            {labels[3]} <br/>
                            {dataPerDay[i][3].temp}&#176; <br/>
                            {dataPerDay[i][3].windDirection} <br/>
                            {dataPerDay[i][3].windSpeed}mph<br/>
                            {dataPerDay[i][3].cloudCover}%
                        </div>
                    </div>
                </SwiperSlide>
            )
            tempSlides.push(
                <SwiperSlide key={`slide-${i*2+1}`}>
                    <div style={MultiColumn}>
                        <div style={Column}>
                            {labels[4]} <br/>
                            {dataPerDay[i][4].temp}&#176; <br/>
                            {dataPerDay[i][4].windDirection} <br/>
                            {dataPerDay[i][4].windSpeed}mph<br/> 
                            {dataPerDay[i][4].cloudCover}%
                        </div>
                        <div style={Column}>
                            {labels[5]} <br/>
                            {dataPerDay[i][5].temp}&#176; <br/>
                            {dataPerDay[i][5].windDirection} <br/>
                            {dataPerDay[i][5].windSpeed}mph<br/> 
                            {dataPerDay[i][5].cloudCover}%
                        </div>
                        <div style={Column}>
                            {labels[6]} <br/>
                            {dataPerDay[i][6].temp}&#176; <br/>
                            {dataPerDay[i][6].windDirection}<br/>
                            {dataPerDay[i][6].windSpeed}mph<br/> 
                            {dataPerDay[i][6].cloudCover}%
                        </div>
                        <div style={Column}>
                            {labels[7]} <br/>
                            {dataPerDay[i][7].temp}&#176; <br/>
                            {dataPerDay[i][7].windDirection}<br/>
                            {dataPerDay[i][7].windSpeed}mph<br/>
                            {dataPerDay[i][7].cloudCover}%
                        </div>
                    </div>
                </SwiperSlide>
            )
        }
        setSlides(tempSlides)
    }

    useEffect(() => {
        getDataPerDay()
        getLabels()
        updateSlides()
    }, [data])

    return (
        <>
            <Swiper
                observer={true}
                observeParents = {true}
                pagination={{ clickable: true }}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                    slidesPerView: 2,
                    },
                }}
            >
                {slides}
            </Swiper>
        </>
    )
}

export default DisplayData

const Column = {
    textAlign: "center"
}

const MultiColumn = {
    columnCount: "4",
    height: "8.5em"
}
import { useState, useEffect } from 'react'

import EmptyMark from '../assets/book_mark.png'
import FullMark from '../assets/book_mark_filled.png'

// Passed locationName (e.g. london)
// and countryName (e.g. GB)
const AddFav = (props) => {
    const [favouritesList, setFavouritesList] = useState(JSON.parse(localStorage.getItem('favourites')))
    const [existsAlready, setExistsAlready] = useState(false)

    useEffect(() => {
        let returnVal
        if (favouritesList) {
            returnVal = favouritesList.favourite.some(e => e.name === props.locationName && e.country === props.countryName)
            setExistsAlready(returnVal)
        }
    }, [favouritesList, props])

    const onClickFav = () => {
        let favArray = JSON.parse(localStorage.getItem('favourites'))

        if (favArray === null) {
            let temp = {
                favourite : [
                    {
                    name: props.locationName,
                    country: props.countryName
                    }
                ]
            }
            localStorage.setItem('favourites', JSON.stringify(temp))
        } else {
            let recordExists = favArray.favourite.findIndex(e => e.name === props.locationName && e.country === props.countryName)
            if (recordExists === -1) {
                let favourite = {
                    name: props.locationName,
                    country: props.countryName
                }
                favArray.favourite.push(favourite)
            } else {
                favArray.favourite.splice(recordExists, 1)
            }
            setFavouritesList(favArray)
            localStorage.setItem('favourites', JSON.stringify(favArray))
        }
    }

    return (
        
        existsAlready ? ( 
            <input className="addFav"
            type="image"
            src={FullMark}
            style={{ maxWidth: "40px" }}
            onClick={onClickFav}
            alt="Submit"/>
        ) : (
            <input className="addFav"
            type="image"
            src={EmptyMark}
            style={{ maxWidth: "40px" }}
            onClick={onClickFav}
            alt="Submit" />
        )
    )
}

export default AddFav

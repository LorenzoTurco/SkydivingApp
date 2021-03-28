import { useState, useEffect } from 'react'

// Favourite icon images
import EmptyMark from '../assets/book_mark.png'
import FullMark from '../assets/book_mark_filled.png'

// Props:
// locationName (e.g. london)
// and countryName (e.g. GB)
const AddFav = (props) => {
    const [favouritesList, setFavouritesList] = useState(JSON.parse(localStorage.getItem('favourites')))
    const [existsAlready, setExistsAlready] = useState(false)

    // If any of the favourites match the current location, set existsAlready to true.
    useEffect(() => {
        let returnVal
        if (favouritesList) {
            returnVal = favouritesList.favourite.some(e => e.name === props.locationName && e.country === props.countryName)
            setExistsAlready(returnVal)
        }
    }, [favouritesList, props])

    // Favourite an item and add to localstorage.
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
            setFavouritesList(temp)
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
        // if the item already exists, coloured in icon
        // otherwise empty icon to denote it not being favourited.
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

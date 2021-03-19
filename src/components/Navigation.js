import NavOption from './NavOption'

// Importing images
import GearIcon from '../assets/gear.png'
import RainIcon from '../assets/rain.png'
import LocationIcon from '../assets/location.png'
import BookmarkIcon from '../assets/book_mark.png'
import SettingsIcon from '../assets/setting.png'

const Navigation = () => {
    return (
        <nav>
            <NavOption
                url="rainfallmap"
                text="Rainfall Map"
                imgsrc={RainIcon}
            />
            <NavOption
                url="recommendedgear"
                text="Recommended Gear"
                imgsrc={GearIcon}
            />
            <NavOption
                url="favourites"
                text="Favourites"
                imgsrc={BookmarkIcon}
            />
            <NavOption
                url="recommendedlocation"
                text="Recommended Locations"
                imgsrc={LocationIcon}
            />
            <NavOption
                url="settings"
                text="Settings"
                imgsrc={SettingsIcon}
            />
        </nav>
    )
}

export default Navigation

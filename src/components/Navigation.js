import NavOption from './NavOption'
import NavOption1 from './NavOption_1'
import NavOption2 from './NavOption_2'
import NavOption3 from './NavOption_3'
import './Navigation.css'

// Importing images
import GearIcon from '../assets/gear.png'
import RainIcon from '../assets/rain.png'
import LocationIcon from '../assets/location.png'
import BookmarkIcon from '../assets/book_mark.png'
import SettingsIcon from '../assets/setting.png'

const Navigation = () => {
    return (
        <div>
            <nav className="menu">
                <NavOption 
                    url="rainfallmap"
                    text="Rainfall Map" 
                    imgsrc={RainIcon}
                />
                <NavOption3 
                    url="recommendedgear" 
                    text="Recommended Gear" 
                    imgsrc={GearIcon}
                />
                <NavOption 
                    url="favourites" 
                    text="Favourites" 
                    imgsrc={BookmarkIcon}
                />
                <NavOption2
                    url="recommendedlocation"
                    text="Recommended Locations" 
                    imgsrc={LocationIcon}
                />
            </nav>
                <NavOption1 
                    url="settings"
                    imgsrc={SettingsIcon}
                />
        </div>
        

    )
}

export default Navigation

import NavOption from './NavOption'
import NavOption1 from './NavOption_1'

// Importing images
import GearIcon from '../assets/gear.png'
import RainIcon from '../assets/rain.png'
import LocationIcon from '../assets/location.png'
import BookmarkIcon from '../assets/book_mark.png'
import SettingsIcon from '../assets/setting.png'
import "./Navigation.css"
const Navigation = () => {
    return (
        <div>
            <nav className="menu">
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
            </nav>
            <div className="setting">
                <NavOption1 
                    url="settings"
                    imgsrc={SettingsIcon}
                    style={{botton:0, right:0}}
                />
            </div>
        </div>
        

    )
}

export default Navigation

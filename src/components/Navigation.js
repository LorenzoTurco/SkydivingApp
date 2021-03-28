import NavOption from "./NavOption";
import NavOption1 from "./NavOption_1";
import NavOption3 from "./NavOption_3";
import "./Navigation.css";

// Importing images
import GearIcon from "../assets/gear.png";
import RainIcon from "../assets/rain.png";
import BookmarkIcon from "../assets/book_mark.png";
import SettingsIcon from "../assets/setting.png";

// Home page navigation options for each page.
const Navigation = () => {
  return (
    <div>
      <nav className="menu">
        <NavOption url="rainfallmap" text="Rainfall Map" imgsrc={RainIcon} />
        <NavOption3
          url="recommendedgear"
          text="Recommended Gear"
          imgsrc={GearIcon}
        />
        <NavOption url="favourites" text="Favourites" imgsrc={BookmarkIcon} />
      </nav>
      <NavOption1 url="settings" imgsrc={SettingsIcon} />
    </div>
  );
};

export default Navigation;

import { Link } from 'react-router-dom'
import "./Navigation.css"
const NavOption = ({ url, text, imgsrc }) => {
    return (
        <p className="Nav">
            <img 
                src={imgsrc} alt=""
                style={{ maxWidth: "50px" }}
            />
            <Link to={`/${url}`} className="text">{text}</Link>
        </p>
    )
}


export default NavOption

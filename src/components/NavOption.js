import { Link } from 'react-router-dom'
import "./Navigation.css"
const NavOption = ({ url, text, imgsrc }) => {
    return (
        <div className="Nav">
            <img 
                src={imgsrc} alt=""
                style={{ maxWidth: "50px" }}
            />
            <div style={{display:"inline-block", verticalAlign:"top"}}>
                <Link to={`/${url}`} className="text">{text}</Link>
            </div>
        </div>
    )
}

export default NavOption

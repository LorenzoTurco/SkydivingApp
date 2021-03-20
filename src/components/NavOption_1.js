import { Link } from 'react-router-dom'
import "./Navigation.css"
const NavOption_1 = ({ url, imgsrc }) => {
    return (
        <p className="Nav">
            <Link to={`/${url}`}>
                <img src={imgsrc} className="imgsrc" alt="" width="45vw" height="40vh"/>
            </Link>
        </p>
    )
}

export default NavOption_1
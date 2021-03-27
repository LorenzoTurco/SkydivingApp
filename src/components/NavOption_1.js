import { Link } from 'react-router-dom'
import "./Navigation.css"
const NavOption_1 = ({ url, imgsrc }) => {
    return (
        <p className="setting">
            <Link to={`/${url}`}>
                <img src={imgsrc} className="imgsrc" alt="" width="63vw" height="56vh"/>
            </Link>
        </p>
    )
}

export default NavOption_1
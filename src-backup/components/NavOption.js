import { Link } from 'react-router-dom'

const NavOption = ({ url, text, imgsrc }) => {
    return (
        <p>
            <img 
                src={imgsrc} alt=""
                style={{ maxWidth: "50px" }}
            />
            <Link to={`/${url}`}>{text}</Link>
        </p>
    )
}

export default NavOption

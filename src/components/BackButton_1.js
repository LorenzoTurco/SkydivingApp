import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Navigation.css"

var style = {height:"4.5%", width:"100%", textAlign:"center",
fontSize:"20px", fontWeight:"bold", backgroundColor:"black", boxShadow:"0px -10px black", padding:"0 0 3px 0"}

// Button to return to homescreen
// For map page
const BackButton_1 = () => {
    const history = useHistory()

    const onClick = () => {
        <Link to={history.push({
            pathname:"/"
        })} className="text"></Link>
    }

    return (
        <input
            id ="back"
            placeholder={"Back to homepage"}
            style={style}
            onClick={onClick}
            alt="back"
         />
    )
}
export default BackButton_1
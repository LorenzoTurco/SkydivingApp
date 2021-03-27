import { useHistory } from 'react-router-dom'
import backIcon from '../assets/back-key-2.png'

// Button to return to the homescreen
const BackButton = () => {
    const history = useHistory()

    const onClick = () => {
        history.push({
            pathname:"/"
        })
    }

    return (
        <input
            className="backButton"
            type="image"
            src={backIcon}
            onClick={onClick}
            alt="back"
        ></input>
    )
}

export default BackButton

import { useHistory } from 'react-router-dom'
import backIcon from '../assets/back-key-2.png'

const BackButton = () => {
    const history = useHistory()

    const onClick = () => {
        history.push({
            pathname:"/"
        })
    }

    return (
        <input
            type="image"
            src={backIcon}
            style={{ maxWidth:"20px" }}
            onClick={onClick}
            alt="back"
        ></input>
    )
}

export default BackButton

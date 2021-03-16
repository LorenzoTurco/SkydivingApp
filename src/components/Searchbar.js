import SearchIcon from '../assets/search.png'

const Searchbar = () => {
    return (
        <div className="searchbar">
            <input 
                style={{}}
                // value={""}
                placeholder={"Search location"}
                // onChange = {(e) => setKeyword(e.target.value)}
            />
            <img
                src={SearchIcon}
                style={{ maxWidth: "20px" }}
                alt=""
            />
        </div>
    )
}

export default Searchbar

import react from "react"

function SearchHeader(){
    return(

        <header className="search-box">
            <input
              type = "text"
              className = "search-bar"
              placeholder = "search"
            />
        </header>


    )
}

export default SearchHeader
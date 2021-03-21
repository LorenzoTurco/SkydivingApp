import React from 'react';


function getLocations(){


    if (localStorage.length === 0){

    }else


    var myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));


    //var data = localStorage.getItem('location').name;
    //console.log(data)


    return myObj_deserialized
}




function Favourites(){


    return(

        <div>

            <h2>City: {getLocations().name}
            <br></br>
            Temperature: {getLocations().main.temp}
            <br></br>
            Something else: {getLocations().main.temp}</h2>

        </div>


            

    )}

export default Favourites
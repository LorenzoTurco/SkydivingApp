import { useParams } from 'react-router';
import './RecGear.css';
import PARACHUTE from '../assets/parachute.jpg'
import AAD from "../assets/aad.jpg"
import JUMPSUIT from "../assets/jumps.png"
import ALTIMETER from "../assets/alti.jpg"
import GOGGLES from "../assets/googles.jpg"
import HELMET from "../assets/helmet.jpg"
import THERMAL from "../assets/TC.png"
import GLOVES from "../assets/gloves.png"


const RecGear = () => {
    

    return (
        
        <div className="body">
               
            <h1 className="headingStyle">Equipment is needed for Skydiving</h1>
            
        <div class="gallery">
             <img src={PARACHUTE} alt="PARACHUTE" width="600" height="400"/>
             <div class="desc">PARACHUTE</div>
               </div>

        <div class="gallery">
  
                <img src={AAD} alt="AAD" width="620" height="500"/>
                 <div class="desc">AAD</div>
        </div>

        <div class="gallery">
             <img src={JUMPSUIT} alt="JUMPSUIT" width="700" height="800"/>
             <div class="desc">JUMPSUIT</div>
        </div>

        <div class="gallery">
             <img src={ALTIMETER} alt="ALTIMETER" width="600" height="400"/>
             <div class="desc">ALTIMETER</div>
        </div>

        <div class="gallery">
             <img src={GOGGLES} alt="GOGGLES" width="600" height="400"/>
             <div class="desc">GOGGLES</div>
        </div>
        <div class="gallery">
             <img src={HELMET} alt="HELEMT" width="600" height="400"/>
             <div class="desc">HELMET</div>
        </div>
        
        
        <div >
        <h2 ><b className="w1"> WHAT TO WEAR WHEN IT’S COLD
    (If the temparature below 5<sup>0</sup>c or so)</b> </h2>
 
        <div class="g1">
        <img src={THERMAL} width="250" height="auto"/>
        <div class="d1">THERMAL</div>
        </div>
        <div class="g1">
        <img src={GLOVES} width="250" height="auto"/>
        <div class="d1">GLOVES</div>
        </div>
         
     </div>


                
           </div>  
           
         


   
    );
}


export default RecGear

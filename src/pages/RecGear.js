import "./RecGear.css";
import PARACHUTE from "../assets/parachute.jpg";
import AAD from "../assets/aad.jpg";
import JUMPSUIT from "../assets/jumps.png";
import ALTIMETER from "../assets/alti.jpg";
import GOGGLES from "../assets/googles.jpg";
import HELMET from "../assets/helmet.jpg";
import THERMAL from "../assets/TC.png";
import GLOVES from "../assets/gloves.png";
import BackButton from "../components/BackButton";

const RecGear = () => {
  return (
    <div className="body">
      <BackButton />
      <h1 className="headingStyle">Skydiving equipment</h1>
      <div class="gallery">
        <img src={PARACHUTE} alt="PARACHUTE" width="600" height="400" />
        <div class="desc">PARACHUTE</div>
      </div>
      <div class="gallery">
        <img src={AAD} alt="AAD" width="620" height="500" />
        <div class="desc">AAD</div>
      </div>
      <div class="gallery">
        <img src={JUMPSUIT} alt="JUMPSUIT" width="700" height="800" />
        <div class="desc">JUMPSUIT</div>
      </div>
      <div class="gallery">
        <img src={ALTIMETER} alt="ALTIMETER" width="600" height="400" />
        <div class="desc">ALTIMETER</div>
      </div>
      <div class="gallery">
        <img src={GOGGLES} alt="GOGGLES" width="600" height="400" />
        <div class="desc">GOGGLES</div>
      </div>
      <div class="gallery">
        <img src={HELMET} alt="HELEMT" width="600" height="400" />
        <div class="desc">HELMET</div>
      </div>

      <div class="gallery">
        <img src={THERMAL} alt="HELEMT" width="600" height="400" />
        <div class="desc">THERMAL</div>
      </div>

      <div class="gallery">
        <img src={GLOVES} alt="HELEMT" width="600" height="400" />
        <div class="desc">GLOVES</div>
      </div>
    </div>
  );
};

export default RecGear;

import "../../secessions/styles/Bigidea.css";

import bigideaimg1 from "../../../Asserts/bigideaimg1.png";
import bigideaimg2 from "../../../Asserts/bigideaimg2.jpg";
import bigideaimg3 from "../../../Asserts/bigideaimg3.jpg";
import arrowSvg from "../../../Asserts/path-first-line.svg";
import arrowSvg2 from "../../../Asserts/path-second-line.svg";

function Bigidea() {
  return (
    <section className="Big-section">
      <div className="Big-container">
        <img src={bigideaimg1} alt="" className="big-img1" />
        <h3>From 2 people with a big idea</h3>
        <p>Bringing more peaace and joy to the world through the wisdom of yoga and meditation.</p>
      </div>
      <img
      src={arrowSvg}
      alt=""
      className="svg-arrow1"
    />
      <div className="Big-container">
        <img src={bigideaimg2} alt="" className="big-img"/>
        <h3>To a team of yogis and travelers</h3>
        <p>Creating a collective of yogis and travelers to run BookRetreats.</p>
      </div>
      <img
      src={arrowSvg2}
      alt=""
      className="svg-arrow2"
    />
      <div className="Big-container">
        <img src={bigideaimg3} alt="" className="big-img"/>
        <h3>On a mission to help others heal and grow</h3>
        <p>May all 8 billion+beings be loving,joyful,and true.</p>
      </div>
    </section>
  );
}
export default Bigidea;
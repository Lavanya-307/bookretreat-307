import "../styles/Ourvalues.css";
import valueimg1 from "../../../Asserts/ourvalues/valueimg1.svg";
import valueimg2 from "../../../Asserts/ourvalues/valueimg2.svg";
import valueimg3 from "../../../Asserts/ourvalues/valueimg3.svg";
import valueimg4 from "../../../Asserts/ourvalues/valueimg4.svg";
import valueimg5 from "../../../Asserts/ourvalues/valueimg5.svg";
import valueimg6 from "../../../Asserts/ourvalues/valueimg6.svg";
import valueimg7 from "../../../Asserts/ourvalues/valueimg7.svg";

function Ourvalues() {
  return (
    <section className="ourvalues">
      <div>
        <h2 className="ourvalues-title">Our values</h2>
      </div>
      <div className="ourvalues-cards">
        <div className="ourvalues-card1">
          <img src={valueimg1} alt="" />
          <h3>Honesty</h3>
          <p>
            Having the courage to be <br/>transparent in our feelings<br/> and what we do
          </p>
        </div>
        <div className="ourvalues-card2">
          <img src={valueimg2} alt="" />
          <h3>Self-responsibility</h3>
          <p>
            Taking responsibility for our situation in life and not engaging in
            the blame game
          </p>
        </div>
        <div className="ourvalues-card3">
          <img src={valueimg3} alt="" />
          <h3>Kindness</h3>
          <p>Acting with compassion,empathy,and patience to make life more comfortable and enjoyable</p>
        </div>
        <div className="ourvalues-card4">
          <img src={valueimg4} alt="" />
          <h3>Dedication</h3>
          <p>Taking on the challenge of the journet and focus upon the vision we want to mainfest</p>
        </div>
        <div className="ourvalues-card5">
          <img src={valueimg5} alt="" />
          <h3>Service</h3>
          <p>Placing our gifts and talents at the services of increasing the loving consciousness of the world</p>
        </div>
        <div className="ourvalues-card6">
          <img src={valueimg6} alt="" />
          <h3>Beauty</h3>
          <p>Expressing openly the core essence that inhabits each one of us</p>
        </div>
        <div className="ourvalues-card7">
          <img src={valueimg7} alt="" />
          <h3>Human Wellbeing</h3>
          <p>
            In the end,we are all in the business of human wellbeing
          </p>
        </div>
        <div className="ourvalues-card8">
          <p>As a company we've been inspiried to be a link in the chain of happiness in the world.In order to manifest that inspiration,we strive to embody these</p>
          <h3>7 Core Values in all of our work</h3>
        </div>
      </div>
    </section>
  );
}
export default Ourvalues;

import "../styles/Uniqueteam.css";
import uniqueteamimg from "../../../Asserts/uniqueimg.webp";

function Uniqueteam() {
  return (
    <div className="uniqueteam">
      <h2>What makes us Unique?</h2>
      <div className="unique-container">
        <img src={uniqueteamimg} alt="" />
        <div className="unique-content">.
            <div>
          <h4>Our Team</h4>
          <p>
            We're a small team of yogis,travelers and people with big hearts. We
            live,breath,and work retreats.Together we've
          </p>
          <p>1.Traveled to 100+coutries</p>
          <p>2.Attended 400+retreats</p>
          <p>3.Led 50+retreats</p>
        </div><br/><br/>
        <div className="unique-content">
          <h4>Our Mission</h4>
          <p>
            To help spread yoga,meditation,and wellness to all 8 billion+people
            on the planet.
          </p>
          <p>
            We live in a world where many people have lost touch with a basic
            truth:
          </p>
          <p>
            It's possible for joy,love,and wellbeing to flow naturally from
            inside.
          </p>
          <p>May we rediscover our natural joy</p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Uniqueteam;


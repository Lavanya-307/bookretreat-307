import "../styles/Ourpath.css";

import img1 from "../../../Asserts/ourpathimg1.webp";
import img2 from "../../../Asserts/ourpathimg2.webp";
import img3 from "../../../Asserts/ourpathimg3.avif";

function Ourpath(){
    return(
        <section className="ourpath-section">
            <h2 className="ourpath-title">Our Path</h2>
            <div className="path-row left-content">
                <div className="path-text">
                    <h3>The founders first meet</h3>
                    <h5>On a retreat in India</h5>
                    <p>"Papaya?" asked Ron,as he offers his specialty limw+papaya combo to sean.</p>
                    <p>That's how our founders first met on a classical yoga retreat in the heart of India and where the idea of BookRetreats began.</p>
                    <p>They'd go on to complete a 6 year sadhana(spiritual practice)together,meeting in India every year on retreat.</p>
                </div>
                <div className="path-image">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="path-row right-content">
                <div className="path-image">
                    <img src={img2} alt=""/>
                </div>
                <div className="path-text">
                    <h3>Growing community</h3>
                    <p>Over the years the team grew and we built a thriving community of retreat enthusiasts,all grounded in a simple question:</p>
                    <p>How can this business embody the wonderful realizations we've all had from yoga and meditation?</p>
                </div>
            </div>
            <div className="path-row left-content">
                <div className="path-text">
                    <h3>Global Reach</h3>
                    <p>We continue to grow until today,becoming the world's #1 retreats site with 1000s of options across 100+ countries.</p>
                    <p>Despite the size,we still manually review every retreat on our site and constantly do in-person site visits to retreats.</p>
                    <p>We live retreats and travel.It's what we do.</p>
                </div>
                <div className="path-image">
                    <img src={img3} alt=""/>
                </div>
            </div>

        </section>
    )
}
export default Ourpath;
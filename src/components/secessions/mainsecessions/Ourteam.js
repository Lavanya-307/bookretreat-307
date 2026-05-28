import "../styles/Ourteam.css";
import { useRef, useState } from "react";

import teamimg1 from "../../../Asserts/ourteam/teamimg1.webp";
import teamimg2 from "../../../Asserts/ourteam/teamimg2.jpg";
import teamimg3 from "../../../Asserts/ourteam/teamimg3.jpg";
import teamimg4 from "../../../Asserts/ourteam/teamimg4.jpg";
import teamimg5 from "../../../Asserts/ourteam/teamimg5.webp";
import teamimg6 from "../../../Asserts/ourteam/teamimg6.jpg";
import teamimg7 from "../../../Asserts/ourteam/teamimg7.jpg";
import teamimg8 from "../../../Asserts/ourteam/teamimg8.jpg";
import teamimg9 from "../../../Asserts/ourteam/teamimg9.png";
import teamimg10 from "../../../Asserts/ourteam/teamimg10.jpg";
import teamimg11 from "../../../Asserts/ourteam/teamimg11.jpg";
import teamimg12 from "../../../Asserts/ourteam/teamimg12.jpg";
import teamimg13 from "../../../Asserts/ourteam/teamimg13.jpg";
import teamimg14 from "../../../Asserts/ourteam/teamimg14.jpg";
import teamimg15 from "../../../Asserts/ourteam/teamimg15.jpg";
import teamimg16 from "../../../Asserts/ourteam/teamimg16.webp";
import teamimg17 from "../../../Asserts/ourteam/teamimg17.jpg";
import teamimg18 from "../../../Asserts/ourteam/teamimg18.jpg";
import teamimg19 from "../../../Asserts/ourteam/teamimg19.jpg";
import teamimg20 from "../../../Asserts/ourteam/teamimg20.jpg";

function Ourteam() {
  const [showAllCards, setShowAllCards] = useState(false);
  const teamSectionRef = useRef(null);

  const teamData = [
    {
      image: teamimg1,
      country: "Namibia",
      name: "Dans",
      role: "Support Team",
      countries: 11,
      retreats: 6,
    },
    {
      image: teamimg2,
      country: "Portugal",
      name: "Charlotte",
      role: "Support Team Lead",
      countries: 35,
      retreats: 5,
    },
    {
      image: teamimg3,
      country: "Switzerland",
      name: "Julie",
      role: "Support Team",
      countries: 22,
      retreats: 10,
    },
    {
      image: teamimg4,
      country: "India",
      name: "Kate",
      role: "Support Team",
      countries: 18,
      retreats: 9,
    },
    {
      image: teamimg5,
      country: "lebanon",
      name: "Leo",
      role: "Finance Team",
      countries: 13,
      retreats: 3,
    },
    {
      image: teamimg6,
      country: "Thailand",
      name: "Sean",
      role: "Founder",
      countries: 18,
      retreats: 25,
    },
    {
      image: teamimg7,
      country: "Portugal",
      name: "Nick",
      role: "Support Team",
      countries: 35,
      retreats: 27,
    },
    {
      image: teamimg8,
      country: "Bali",
      name: "Karen",
      role: "Finance Team",
      countries: 10,
      retreats: 30,
    },
    {
      image: teamimg9,
      country: "Chile",
      name: "Valeria",
      role: "Support Team",
      countries: 18,
      retreats: 4,
    },
    {
      image: teamimg10,
      country: "Italy",
      name: "Erika",
      role: "Finance Team",
      countries: 21,
      retreats: 12,
    },
    {
      image: teamimg11,
      country: "UK",
      name: "Hannah",
      role: "Marketing Team",
      countries: 26,
      retreats: 10,
    },
    {
      image: teamimg12,
      country: "Indonesia",
      name: "Sandy",
      role: "Support Team",
      countries: 36,
      retreats: 7,
    },
    {
      image: teamimg13,
      country: "Indonesia",
      name: "Aman",
      role: "Support Team",
      countries: 28,
      retreats: 11,
    },
    {
      image: teamimg14,
      country: "Italy",
      name: "Francesco",
      role: "Product Team",
      countries: 21,
      retreats: 12,
    },
    {
      image: teamimg15,
      country: "Israel",
      name: "Ron",
      role: "Founder",
      countries: 17,
      retreats: 30,
    },
    {
      image: teamimg16,
      country: "Namibia",
      name: "Daniel",
      role: "Support Team Manager",
      countries: 31,
      retreats: 15,
    },
    {
      image: teamimg17,
      country: "South Africa",
      name: "Marria",
      role: "Support Team",
      countries: 19,
      retreats: 12,
    },
    {
      image: teamimg18,
      country: "US",
      name: "Sas",
      role: "Finance Team",
      countries: 31,
      retreats: 16,
    },
    {
      image: teamimg19,
      country: "Nepal",
      name: "Park",
      role: "Support Team Lead",
      countries: 21,
      retreats: 8,
    },
    {
      image: teamimg20,
      country: "Namibia",
      name: "Devid",
      role: "Support Team",
      countries: 19,
      retreats: 6,
    },
  ];

  const visibleTeamData = showAllCards ? teamData : teamData.slice(0, 12);

  const handleToggleCards = () => {
    if (showAllCards) {
      teamSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    setShowAllCards(!showAllCards);
  };

  return (
    <section className="team-section" ref={teamSectionRef}>
      {/* left content */}
      <div className="team-left">
        <h2>Our team</h2>
        <p>
          Our fully remote lives,travels,and works all over the world. From
          India to Indonesia,the Philippines to Portugal,Ukraine to the US; and
          everywhere else in between
        </p>

        <div className="team-buttons">
          <button className="active-btn">List</button>
          <button>Map</button>
        </div>
        <div className="team-stat">
            <span>Total countries travelled:</span>
            <h2>100+</h2>
        </div>
        <div className="team-stat">
            <span>Total retreats attended:</span>
            <h2>242</h2>
        </div>
      </div>
      {/* right side */}
      <div className="team-right">
        <div className="team-grid">
        {visibleTeamData.map((item,index)=>(
            <div className="team-card"key={index}>
                <div className="team-image-wrapper">
                    <img src={item.image} alt="" className="team-img"/>
                    <div className="country-tag">
                        📍{item.country}
                    </div>
                </div>
                <div className="team-content">
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>

                    <div className="team-info">
                        <span>Countries</span>
                        <strong>{item.countries}</strong>
                    </div>
                    <div className="team-info">
                        <span>Retreats</span>
                        <strong>{item.retreats}</strong>
                    </div>
                </div>
                </div>
        ))}
        </div>

        <button className="team-toggle-btn" onClick={handleToggleCards}>
          {showAllCards ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}
export default Ourteam;

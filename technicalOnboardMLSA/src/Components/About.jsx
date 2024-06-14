import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
"I'm a student who wishes to inspire people to step out of their comfort zones and become better versions of themselves, just like I did.";
const skillsList = [
  "Web Development",
  "Data Analysis",
  "Public Speaking",
  "AI Development",
  "UX/UI Design",
  "Graphic design",
];
const detailOrQuote =
"I'm a passionate learner aspiring to become an AI Developer dedicated to making the world more accessible for all. My goal is to leverage the power of artificial intelligence to create innovative solutions that address societal challenges and improve lives globally.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

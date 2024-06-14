import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "The Winner CAI club Hackthon 2022",
    description:
      "Build an AI platform that help with mental health and well-being. The platform is designed to help users check their mental health status and provide them with a list of activities to improve their mental health.",
    url: "https://www.mitihoon.com/2022/08/29/327672/",
  },
  {
    title: "UMAP Winter Discovery Camp",
    description:
      "Short-term exchange in Surabaya, Indonesia that explore the concept SDGs",
    url: "https://www.youtube.com/watch?v=Dt7kVOgoAaE",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

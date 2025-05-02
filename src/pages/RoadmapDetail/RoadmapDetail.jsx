import React from "react";
import { useParams } from "react-router-dom";

const resources = [
  { type: "Video", title: "Intro Video", url: "#" },
  { type: "Blog", title: "Topic Guide", url: "#" },
  { type: "Quiz", title: "Self Check", url: "#" },
];

const RoadmapDetail = () => {
  const { skill, weekId } = useParams();
  return (
    <div className="container">
      <h2>{skill.toUpperCase()} - Week {weekId}</h2>
      <h3>Topics</h3>
      <ul>
        <li>Topic {weekId}A</li>
        <li>Topic {weekId}B</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        {resources.map((r, idx) => (
          <li key={idx}>
            {r.type}: <a href={r.url}>{r.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapDetail;
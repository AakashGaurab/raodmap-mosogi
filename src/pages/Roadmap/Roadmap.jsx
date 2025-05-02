import React from "react";
import { useParams, Link } from "react-router-dom";

const mockRoadmap = (skill) =>
  Array.from({ length: 10 }, (_, i) => ({
    week: i + 1,
    topics: [`Topic ${i + 1}A`, `Topic ${i + 1}B`],
  }));

const Roadmap = () => {
  const { skill } = useParams();
  const roadmap = mockRoadmap(skill);

  return (
    <div className="container">
      <h2>{skill.toUpperCase()} Roadmap</h2>
      <ul>
        {roadmap.map((week) => (
          <li key={week.week}>
            <Link to={`/roadmap/${skill}/week/${week.week}`}>
              Week {week.week}: {week.topics.join(", ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
"use client";

import logo from "public/images/assets/logo.svg";

import React from "react";

import ExperienceCard from "./ExperienceCard";

interface ExperienceData {
  company: string;
  title: string;
  timeframe: string;
  location: string;
  type: string;
  description: string;
  image: string;
  currentPosition: boolean;
}

const experiences: ExperienceData[] = [
  {
    company: "Novo",
    title: "Senior Backend Engineer",
    timeframe: "Aug 2023 - Present (3 m)",
    location: "Bangalore Urban, India",
    type: "Full-Time",
    description:
      "Led the development of Novo's core backend systems, focusing on scalability and performance. Implemented new features and optimized existing ones to improve user experience.",
    image: logo,
    currentPosition: true,
  },
  {
    company: "Postman",
    title: "Software Engineer II",
    timeframe: "May 2021 - Aug 2023 (2 yr, 3 m)",
    location: "Bengaluru, India",
    type: "Full-Time",
    description:
      "Contributed to the development of Postman's API platform, improving developer tools and enhancing collaboration features.",
    image: logo, // Placeholder for Postman icon
    currentPosition: false,
  },
];

const ExperienceSection = () => {
  return (
    <section className="p-6">
      <h2 className="mb-8 text-2xl font-bold">Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <React.Fragment key={experience.company}>
            <ExperienceCard
              company={experience.company}
              title={experience.title}
              timeframe={experience.timeframe}
              location={experience.location}
              type={experience.type}
              description={experience.description}
              image={experience.image}
              isLastItem={index === experiences.length - 1}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

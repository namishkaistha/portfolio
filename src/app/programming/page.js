"use client";

import { useState } from "react";
import ProjectCard from "../components/molecules/ProjectCard";
import Description from "../components/atoms/Description";
import FilterBar from "../components/organisms/FilterBar";

export default function ProgrammingPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Catan",
      tech: ["Java"],
      description: "Virtual version of the board game Catan",
      accomplishments: [
        "Developed using Test-Driven Development and boundary value analysis in a team of four",
        "Engineered a CI pipeline with GitHub Actions, SpotBugs, Checkstyle, JaCoCo, and PIT to ensure product quality",
        "Led weekly sprint planning via GitHub Projects to identify and execute goals and balance developer workloads",
      ],
      category: ["Full Stack", "Project Management"],
      githubUrl: "https://github.com/namishkaistha/catan",
    },
    {
      title: "Shoutout",
      tech: ["Next.js", "Tailwind CSS", "GraphQL", "Django", "Apollo"],
      description: "Full Stack Newsfeed Application",
      accomplishments: [
        "Supporting user registration, login/logout, and post creation/editing with session-based authentication and secure cookie handling",
        "Utilizing GraphQL to fetch and display posts, comments, and user profiles",
        "Integrated Django GraphQL backend with Next.js using Apollo Client and cache updates for instant post refresh",
        "Applied atomic design pattern to build reusable UI components, improving frontend scalability",
      ],
      category: ["Full Stack"],
      githubUrl: "https://github.com/namishkaistha/shoutout",
    },
    {
      title: "FastPay",
      tech: ["React Native", "express.js", "mysql", "socket.io"],
      description: "Mobile bill-splitting app",
      accomplishments: [
        "Developed a mobile bill-splitting app using React Native, Express.js, MySQL, and Socket.io to allow users to split bills with friends",
        "Implemented a real-time payment system using Socket.io to update balances instantly",
        "Designed a user-friendly interface with a focus on ease of use and accessibility",
        "Researched and wrote a technical design document with problem statements, use case diagrams, and Tech stack tradeoffs",
      ],
      category: ["Full Stack"],
      githubUrl: "https://github.com/namishkaistha/paymentsApp",
    },
    {
      title: "MediRoute",
      tech: ["K-means clustering", "AWS Lambda", "Google OR Tools"],
      description: "AI Route Optimization Platform for Mobile Health Clinics",
      accomplishments: [
        "Led a team of 6 in designing a system to optimize mobile clinic routes in Illinois using disease and accessibility data",
        "Architected a pipeline using K-Means clustering to identify high-need areas and Google OR-Tools to generate efficient travel routes balancing distance, capacity, and demand",
        "Conducted user interviews with healthcare workers and clinic staff to identify workflow pain points",
      ],
      category: ["Project Management", "Full Stack", "ML"],
    },
    {
      title: "Stock Picker",
      tech: ["Python", "Flask", "Finbert", "Goose3"],
      description:
        "Trading program that gives users actionable insights on stocks",
      accomplishments: [
        "Developed a custom stock selection algorithm combining Value vs. Growth metrics with Turtle Trading strategy",
        "Enhanced decision-making by integrating AI-powered sentiment analysis using FinBERT and Goose3 to classify financial news and provide context for stock picks",
      ],
      category: ["Backend", "ML"],
      githubUrl: "https://github.com/namishkaistha/stockPicker",
    },
    {
      title: "Elizabeth",
      tech: ["Python", "Gmail API"],
      description:
        "Multimodal AI meeting assistant developed at Northwestern's C3 Lab",
      accomplishments: [
        "Engineered a Python-based automation pipeline allowing Elizabeth to autonomously join meetings, take notes, and summarize them",
      ],
      category: ["ML", "Backend"],
    },
    {
      title: "Spotify API Analysis",
      tech: ["Python", "AWS Lambda", "REST API"],
      description:
        "REST API app that provides personalized music recommendations",
      accomplishments: [
        "In a group of 3, engineered a backend REST API to provide music recommendations based on a user's location and weather, with an integrated feature to check if similar artists are currently on tour",
        "Designed the backend using AWS Lambda and a serverless architecture to ensure scalable performance and minimize infrastructure management",
      ],
      category: ["Backend"],
    },
    {
      title: "Trip Planner",
      tech: ["Python", "Dijkstra's Algorithm", "Heap Sort", "API Design"],
      description: "Trip Planner API",
      accomplishments: [
        "Provides routing and searching services for a user within a city",
        "Utilized Dijksitras algorithm, Heap Sort, and a combination of graphs and dictionaries to answer 3 user queries",
        "Executed locate-all, plan-route, and find-nearby queries to locate all points, plan a route between two points, and find n closest points of a specific category",
      ],
      category: ["Backend"],
    },
    {
      title: "OCR scanner",
      tech: ["Python", "Pytesseract", "OpenCV"],
      description: "OCR scanner that reads receipts and tracks expenses",
      accomplishments: [
        "Developed an OCR scanner using Pytesseract and OpenCV to read receipts and track expenses",
        "Used Python to format the output into readable content",
      ],
      category: ["ML", "Backend"],
      githubUrl: "https://github.com/namishkaistha/receiptScanner",
    },
    {
      title: "Mancala",
      tech: ["C/C++"],
      description: "Virtual version of the board game Mancala",
      accomplishments: [
        "Developed a virtual version of the board game Mancala using C/C++ in the MVC Design Pattern, in a team of 2",
      ],
      category: ["Full Stack"],
    },
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-background text-foreground space-y-8">
      <h2 className="flex flex-col items-center text-3xl p-8 dark:text-white">
        My Projects
      </h2>
      <Description description="Projects I've worked on, along with notable achievements. When applicable, click on the project to see the code on GitHub." />
      <FilterBar onFilterChange={handleFilterChange} />
      {filteredProjects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          tech={project.tech}
          description={project.description}
          accomplishments={project.accomplishments}
          category={project.category}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
}

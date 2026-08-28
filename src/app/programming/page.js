"use client";

import { useState } from "react";
import ProjectCard from "../components/molecules/ProjectCard";
import Description from "../components/atoms/Description";
import FilterBar from "../components/organisms/FilterBar";

export default function ProgrammingPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Pantry Check-In",
      tech: [
        "React 19",
        "TypeScript",
        "FastAPI",
        "Neon Postgres",
        "Vite",
        "Vercel",
      ],
      description:
        "Volunteer check-in tool for a local food pantry in Evanston",
      accomplishments: [
        "Built a mobile-first check-in flow — recipients enter their phone, a volunteer long-presses to approve, and each approved person gets one bag per week with an explicit override for edge cases",
        "Atomic-design React 19 frontend (TypeScript strict, WCAG 2.1 AA, EN/ES i18n) with 110 unit tests, and a TDD FastAPI backend at 97% coverage",
        "Deployed on Vercel with a Neon serverless Postgres backend; a fire-and-forget warm-up ping on landing masks the double serverless cold-start so volunteers never wait on the first check-in",
      ],
      category: ["Full Stack", "Project Management"],
      githubUrl: "https://github.com/namishkaistha/checkIn",
    },
    {
      title: "Maple Mystery Shop",
      tech: ["Python", "Bland.ai", "Claude API", "SQLite"],
      description:
        "Voice-AI mystery shopping system for a restaurant sales pipeline",
      accomplishments: [
        "Built a CLI that mystery-shops prospective restaurant leads by placing Bland.ai voice calls, extracting structured fields from the transcript with Claude, and scoring each call 0–100 across reachability, order handling, friction, and warmth",
        "Designed the extracted-fields schema around the question 'why would a customer never order again?' rather than what's easy to parse — the resulting score drives a one-line pitch handle for the SDR",
        "Resumable pipeline over a 2,355-lead workbook: completed calls are excluded from re-runs, retries are scheduled automatically, and results surface through a Rich terminal UI",
      ],
      category: ["Backend", "ML"],
      githubUrl: "https://github.com/namishkaistha/maple-mystery-shop",
    },
    {
      title: "AI Mock Interview",
      tech: ["FastAPI", "Claude API", "pdfplumber", "Tavily"],
      description:
        "Stateless multi-modal behavioral mock interview tool",
      accomplishments: [
        "Generates behavioral interview questions personalized from the candidate's resume (parsed in-memory with pdfplumber) and target company / interviewer context pulled via Tavily search",
        "Claude drives question generation, interviewer follow-ups, and end-of-session evaluation with rubric-scored feedback",
        "Fully stateless — resume never hits disk, session state lives in memory only for the length of a single interview and is discarded afterward",
      ],
      category: ["Backend", "ML"],
      githubUrl: "https://github.com/namishkaistha/mock_interview",
    },
    {
      title: "Perception",
      tech: ["Python", "NLP", "Sentiment Analysis"],
      description:
        "Personal project tracking how other people's perception of me shifts across contexts and over time",
      accomplishments: [
        "Extracts latent perception dimensions — risk orientation, spontaneity, ambition, creativity, reliability — from free-text descriptions solicited from friends across hometown, college, and family cohorts",
        "Plots each response as a colored dot on per-dimension number lines, cohort by cohort, to surface variance patterns and drift over time",
        "Leans on the high adjective density and semantic consistency of the responses to reliably extract traits despite a modest sample size",
      ],
      category: ["ML"],
      githubUrl: "https://github.com/namishkaistha/perception",
    },
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

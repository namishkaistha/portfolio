// src/app/programming/programmingPage.js
import ProjectCard from "../components/molecules/ProjectCard";
export default function ProgrammingPage() {
  return (
    //first, the card itself
    <div className="min-h-screen flex flex-col items-center p-8 dark:bg-black space-y-8">
      <h2 className="flex flex-col items-center text-3xl p-8 dark:text-white">
        My Projects
      </h2>
      <ProjectCard
        title="AI Route Optimization Platform (Project Manager)"
        tech="Python, Google OR Tools, React, AWS"
        description="Currently, mobile health clinics don't really know where to go. They usually rely on word of mouth. Our application leverages data from the CDC API and data on hospital density/patient to physician ratio to find the top 10 counties most in need in Illinois, and create an optimal route for a mobile health clinic to travel to these areas while accounting for vehicle and fuel constraints."
      />
      <ProjectCard
        title="Stock Picker"
        tech="Python, Goose3, FinBert"
        description="Developed a custom trading algorithm that utilized the value vs growth investing strategy as well as the turtle trading strtegy to provide users with actionable insights on stocks. Additionally, I used Finbert and Goose3 to incorporate AI sentiment analysis. The NLP scraped the web for financial news surrounding certain stocks, and came up with a sentiment score that was incorporated into the algorithm. "
      />
      <ProjectCard
        title="OCR scanner"
        tech="Python, Pytesseract, OpenCV"
        description="For a demo on Computer Vision's capabilities during my internship at Ollion, I decided to experiment with Pytessearact and OpenCV to see if it could read my chipotle receipts, and eventually track my expenses to see how much I spend on Chipotle. I used Pytesseract and OpenCV to read the image, and used Python to format the output into readable content."
      />
    </div>
  );
}

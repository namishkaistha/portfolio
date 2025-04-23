//  ── src/app/about/page.js
import Profile from "../components/atoms/Photo";
import ContactForm from "../components/organisms/ContactForm";
import IntroCard from "../components/molecules/IntroCard";
import profilePic from "../profile/Namish_Photo.jpg"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black flex flex-col items-center gap-8 p-8">
      <h2 className="text-3xl p-8 dark:text-white">Hello!</h2>
      <IntroCard photo={profilePic} 
      description={
        <div className="text-center md:text-left">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I’m Namish, a Computer Science and Economics student passionate
            about empowering people and businesses to tell their stories. I do
            this predominately through creating content and working on ideas
            that democratize technology for businesses. You can find my work
            on{" "}
            <a
              href="https://www.linkedin.com/in/namishkaistha"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="https://github.com/namishkaistha"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
            >
              GitHub
            </a>
            , or you can check out my {""}
            <a
              href="/Kaistha_Namish_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text_blue-200"
            >
              Resume
            </a>
          </p>
        </div>}/>
      <ContactForm />
    </main>
  );
}

import Profile from "../atoms/Profile"
export default function IntroCard() {
    return (
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        {/* ── PROFILE + BIO ── */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
      <Profile />
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-8">
        {/* Text Description */}
        <div className="text-center md:text-left">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I’m Namish, a Computer Science and Economics student passionate
            about empowering people and businesses to tell their stories. I do
            this predominately through creating content and working on ideas
            that democratize technology for businesses. You can find my work on{" "}
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
              className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text_blue-200">
                Resume
              </a>
          </p>
        </div>
      </div>
    </div>
    </div>
    )
}
//  ── src/app/about/page.js
import Profile from "../components/atoms/Profile";
import ContactForm from "../components/organisms/ContactForm"
import IntroCard from "../components/molecules/IntroCard"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black flex flex-col items-center gap-8 p-8">
      <IntroCard/>
      <ContactForm/>

    </main>
  );
}

// src/app/creative/creativePage.js
import IntroCard from "../components/molecules/IntroCard";
import ProjectAlchemy from "../profile/Project_Alchemy.png";
import PodCard from "../components/molecules/PodCard";
export default function CreativePage() {
  return (
    <main className="min-h-screen bg-background text-foreground dark:bg-foreground dark:text-background flex flex-col items-center gap-8 p-8">
      <h2 className="text-3xl p-8 dark:text-white">Project Alchemy</h2>
      <div>
        <IntroCard
          photo={ProjectAlchemy}
          description={
            <div className="text-center md:text-left">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The{" "}
                <a
                  href="http://open.spotify.com/show/4JDEKnaNhWAL0ceZmZ7dsx?si=NLuzfMvCSdmBXYYxeD0PxQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                >
                  Project Alchemy Podcast{" "}
                </a>
                was mine and Jack Considine's excuse to learn from Entrepreneurs
                and Creatives that we wanted to emulate. Along the way, we
                recorded over 200 episodes, and crystallized our mission: to
                empower young people to pursue the "unconventional" path. Below,
                click on some of our most interesting interviews to find my
                favorite quotes and insights. Relevant podcast links are below
                each card.
              </p>
            </div>
          }
        />
        <div className="mt-20 flex gap-12 dark:text-white">
          <PodCard
            title="Sameer Gadhia (Young the Giant)"
            description="I know a ton of kids in their late 20s and early 30s who are trying to convince themselves that they love this job they HATE...and it's just paying the bills"
            link="https://open.spotify.com/episode/64D9J2tXN20KBrfGOsOto7?si=4eQLNHt4RFibntLefgHAvw"
          />
          <PodCard
            title="Simran Kaur (Founder of Girls That Invest)"
            description="Our views on money are largely shaped by the experiences we've had growing up...all you have to do is tap into that to understand to then go well, maybe money ISN'T evil, maybe I can have a growth mindset"
            link="https://open.spotify.com/episode/2nhhcyIme7R1btcl8NLIi2?si=31Et0_XmSWSvIuqWVARyJQ"
          />
          <PodCard
            title="Michael Bungay Stanier (Author of The Coaching Habit)"
            description="If there's one thing I've learned about starting a business, it's whatever you think your business is at the start, it's not that at the end...you're looking for something you like doing, something you're good at doing, and something that the market will pay you for"
            link="https://open.spotify.com/episode/3G2DaPsLhxJrzJzKh9qSBx?si=ONCrqn31QgOvCfsBkrkLxw"
          />
        </div>
      </div>
    </main>
  );
}

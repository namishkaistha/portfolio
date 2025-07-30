import Profile from "../atoms/Photo";
import Description from "../atoms/Description";

export default function IntroCard({ photo, description }) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-4">
      {/* ── PROFILE + BIO ── */}
      <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full">
        <Profile photo={photo} />
        <Description description={description} />
      </div>
    </div>
  );
}

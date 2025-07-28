
import Profile from "../atoms/Photo";
import Description from "../atoms/Description";
export default function IntroCard({ photo, description }) {
   return (
     <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
       {/* ── PROFILE + BIO ── */}
       <div className="flex flex-col md:flex-row items-center gap-8 w-full">
         <Profile photo={photo}/>
         <Description description={description} />
       </div>
     </div>
   );
 }

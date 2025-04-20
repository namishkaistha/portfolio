import Image from "next/image";
import HoverCard from "./components/molecules/HoverCard";

export default function Home() {
  return (
    //min-h-screen ensures div will stretch at least to fill the full screen vertically; flex during div into a flex container; flex-col means children are laid out top-to bottom
    //items-center aligns items to center; justify-start aligns stacked items

    //mt-[15vh] keeps Hi, I'm namish 15 percent from the top
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="mt-[15vh] text-6xl font-medium">Hi, I&apos;m Namish</h1>
      <b>
        <h2 className="mt-[5vh] text-3xl font-medium">I tell stories</h2>
      </b>
      <div className="mt-16 flex gap-12">
        <HoverCard href="/creative" title="Creative" />
        <HoverCard href="/programming" title="Programming" />
      </div>
    </div>
  );
}

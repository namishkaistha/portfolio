import Image from "next/image";
export default function Profile({photo}) {
    return (
        <div className="flex-shrink-0">
          <Image
            src={photo}
            alt="Photo of me"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
          />
        </div>
    )
}
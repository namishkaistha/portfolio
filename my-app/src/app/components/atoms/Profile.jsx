import Image from "next/image";
import profilePic from "../../profile/Namish_Photo.jpg"
export default function Profile() {
    return (
        <div className="flex-shrink-0">
          <Image
            src={profilePic}
            alt="Photo of me"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
          />
        </div>
    )
}
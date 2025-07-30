import Image from "next/image";

export default function Profile({ photo }) {
  return (
    <div className="flex-shrink-0">
      <Image
        src={photo}
        alt="Photo of me"
        width={250}
        height={250}
        className="rounded-full shadow-lg w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover"
      />
    </div>
  );
}
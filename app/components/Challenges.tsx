import Image from "next/image";

const Card = () => {
  return (
    <div className="border border-gray-200 rounded-2xl flex flex-col min-h-[400px]">
      <div className="flex-1 relative w-full">
        <Image
          src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/youkdcm0w5zedahid4by.jpg"
          alt="screenshot of a project"
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4 p-5 ">
        <h1 className="text-2xl font-semibold">Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est deleniti
          eum alias doloribus quis vero eius quidem dicta laborum consequuntur.
        </p>
        <ul className="flex gap-2.5">
          <li className="text-xs bg-amber-300 inline px-2 py-1 border-0 rounded-2xl">
            NextJS
          </li>
          <li className="text-xs bg-gray-300 inline px-2 py-1 border-0 rounded-2xl">
            MongoDB
          </li>
          <li className="text-xs bg-blue-300 inline px-2 py-1 border-0 rounded-2xl">
            NodeJS
          </li>
        </ul>
      </div>
    </div>
  );
};

const Challenges = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto w-full p-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Challenges;

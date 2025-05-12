import Image from "next/image";

const Card = () => {
  return (
    <div className="border border-red-500 flex flex-col min-h-[560px]">
      <div className="flex-1 relative w-full">
        <Image
          src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/youkdcm0w5zedahid4by.jpg"
          alt="screenshot of a project"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex-1 p-2">
        <h1>Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est deleniti
          eum alias doloribus quis vero eius quidem dicta laborum consequuntur.
        </p>

        <div className="">stack</div>
      </div>
    </div>
  );
};

const Challenges = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto w-full p-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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

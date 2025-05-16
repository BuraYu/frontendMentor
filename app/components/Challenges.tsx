import Link from "next/link";
import { useEffect, useState } from "react";

interface Card {
  title: string;
  description: string;
  techstack: string[];
}

const Challenges = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data: Card[] = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative max-w-[1200px] mx-auto w-full p-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Link href={`/challenge/${index + 1}`}>
            <div
              key={index}
              className="border border-gray-200 rounded-2xl flex flex-col min-h-[500px] z-10"
            >
              <div className="flex-1 relative w-full">
                <img
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/youkdcm0w5zedahid4by.jpg"
                  alt="placeholder"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4 p-5">
                <div>
                  <h1 className="text-2xl font-semibold">{card.title}</h1>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {card.techstack.map((tag, index) => (
                    <li
                      key={index}
                      className="text-xs bg-gray-300 inline px-2 py-1 border-0 rounded-2xl"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="flex-1">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Challenges;

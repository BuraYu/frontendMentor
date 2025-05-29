import Link from "next/link";
import { useEffect, useState } from "react";

interface Card {
  title: string;
  description: string;
  techstack: string[];
}

interface ChallengesProps {
  searchInput: string;
  selectedFilters: string[];
}

const Challenges = ({ searchInput, selectedFilters }: ChallengesProps) => {
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

  const filteredCards = cards.filter((card) => {
    const search = searchInput.toLowerCase();

    const matchesSearch =
      card.title.toLowerCase().includes(search) ||
      card.techstack.some((tech) => tech.toLowerCase().includes(search));

    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.every((filter) =>
        card.techstack
          .map((t) => t.toLowerCase())
          .includes(filter.toLowerCase())
      );
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="relative max-w-[1200px] mx-auto w-full p-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No matching challenges found.
          </p>
        ) : null}
        {filteredCards.map((card, index) => (
          <Link key={index} href={`/challenge/${index + 1}`}>
            <div className="border border-gray-200 rounded-2xl flex flex-col min-h-[500px] z-10">
              <div className="flex-1 relative w-full">
                <img
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/youkdcm0w5zedahid4by.jpg"
                  alt="placeholder"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4 p-5">
                <h1 className="text-2xl font-semibold">{card.title}</h1>
                <ul className="flex flex-wrap gap-2.5">
                  {card.techstack.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
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

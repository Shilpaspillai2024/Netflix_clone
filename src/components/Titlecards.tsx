import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface TitlecardsProps {
  title: string;
  category: string;
}

const Titlecards: React.FC<TitlecardsProps> = ({ title, category }) => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 5;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM5NmZmOWVmYzNkYjM1MGU1ZGMyZTk0N2EyZmYzNyIsIm5iZiI6MTcyNzE2NjE1My42NTk1OTEsInN1YiI6IjY2ZjI2YzMwMDIyMDhjNjdjODhkNjhmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jfyr6nR_kewVpz3YJsQ2jV2t-hLeYG2AtKa7EwOZSxA',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setApiData(data.results);
      } catch (error) {
        console.error("Fetch Error: ", error);
        toast.error("Failed to load movies. Please try again later.");
      }
    };

    fetchData();
  }, [category]);

  const endIndex = Math.min(startIndex + cardsToShow, apiData.length);

  const handleNext = () => {
    if (endIndex < apiData.length) {
      setStartIndex(startIndex + cardsToShow);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - cardsToShow);
    }
  };

  return (
    <div className="mt-[50px] mb-[30px]">
      <h3 className="text-white text-lg font-semibold mb-2 ml-3 p-3">
        {title}
      </h3>

      {/* Controls and Card List Container */}
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="mr-2 p-2 text-white rounded-full disabled:opacity-50"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="flex gap-[10px] overflow-hidden">
          {apiData.length > 0 &&
            apiData.slice(startIndex, endIndex).map((card) => {
              // Log the navigation path
              console.log(`Navigating to: /player/${card.id}`);
              
              return (
                <Link to={`/player/${card.id}`} key={card.id} className="relative w-[240px] group">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                    alt={card.original_title}
                    className="w-full h-[240px] rounded-[4px] transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <p className="absolute bottom-[10px] left-[10px] text-white bg-black bg-opacity-60 p-2 rounded">
                    {card.original_title}
                  </p>
                </Link>
              );
            })}
        </div>

        <button
          onClick={handleNext}
          disabled={endIndex >= apiData.length}
          className="ml-2 p-2 text-white rounded-full disabled:opacity-50"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Titlecards;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import back_arrow_icon from "../assets/back_arrow_icon.png";

const Player: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM5NmZmOWVmYzNkYjM1MGU1ZGMyZTk0N2EyZmYzNyIsIm5iZiI6MTcyNzE3OTE2Ni4zOTk0MjgsInN1YiI6IjY2ZjI2YzMwMDIyMDhjNjdjODhkNjhmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DpYRVusGwSxSJ1A5bXEXQoNjEmVwC0NQnQB4yVWpE2Y",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full flex items-center p-4">
        <img
          src={back_arrow_icon}
          alt="Back"
          onClick={() => navigate(-2)}
          className="cursor-pointer w-8 h-8"
        />
        <h2 className="ml-4 text-xl font-semibold">Now Playing</h2>
      </div>

      {/* Video Player */}
      <div className="flex justify-center items-center w-full h-full">
        <iframe
          className="w-11/12 h-4/5 md:w-3/4 lg:w-2/3"
          src={`https://www.youtube.com/embed/${apiData.key}`} // Replace with actual video URL or source
          title="Video Player"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
      {/* Video Details */}
      <div className="mt-6 text-center">
        <p className="text-lg">{apiData.published_at.slice(0, 10)}</p>
        <p className="text-lg">{apiData.name}</p>
        <p className="text-lg">{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;

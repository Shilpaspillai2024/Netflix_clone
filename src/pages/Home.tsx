import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import Titlecards from "../components/Titlecards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      <div className="relative w-full">
        {/* Hero Banner */}
        <img
          src={hero_banner}
          alt="hero_banner"
          className="w-full mask-gradient"
        />
        <div className="absolute bottom-0 pl-[6%] pb-[30px]">
          <img
            src={hero_title}
            alt="hero_title"
            className="w-[90%] max-w-[420px] mb-[20px]"
          />
          <p className="max-w-[700px] text-[17px] mb-[20px]">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-2 mb-[30px]">
            <button className="flex items-center gap-2 px-5 py-2 bg-white hover:bg-opacity-75 font-semibold rounded-md shadow cursor-pointer text-black">
              <img src={play_icon} alt="Play Icon" className="w-[25px]" />
              Play
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-gray-700 hover:bg-gray-600 font-semibold rounded-md shadow cursor-pointer text-white">
              <img src={info_icon} alt="Info Icon" className="w-[25px]" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Title Cards Section */}
      <div className="mt-[50px] px-[6%]">
        <Titlecards title={"Popular on Netflix"} category={"popular"} />
        <Titlecards title={"Trending Now"} category={"top_rated"} />
        <Titlecards title={"Top Picks for You"} category={"now_playing"} />
        <Titlecards title={"Upcoming"} category={"upcoming"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

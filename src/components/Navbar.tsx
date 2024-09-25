
import netflixLogo from "../assets/Netflix_logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { useEffect, useRef, useState } from "react";
import { logout } from "../firebase";

const Navbar: React.FC = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [isDark, setIsDark] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const profileRef = useRef<HTMLDivElement | null>(null); // Reference for the profile dropdown

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                setIsDark(window.scrollY >= 80);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener
        };
    }, []);

    // Handle dropdown visibility with click and blur
    const handleDropdownToggle = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleBlur = () => {
        setIsDropdownVisible(false); // Close dropdown when clicking outside
    };

    return (
        <div
            ref={navRef}
            className={`fixed w-full p-4 flex items-center justify-between z-50 
            transition duration-300 ease-in-out ${isDark ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}
        >
            <img src={netflixLogo} alt="NETFLIX" className="w-32 h-auto rounded-md shadow-lg ml-8" />

            <ul className="flex space-x-6 text-sm">
                <li className="hover:text-gray-400 cursor-pointer">Home</li>
                <li className="hover:text-gray-400 cursor-pointer">Tv Shows</li>
                <li className="hover:text-gray-400 cursor-pointer">Movies</li>
                <li className="hover:text-gray-400 cursor-pointer">New & Popular</li>
                <li className="hover:text-gray-400 cursor-pointer">My List</li>
                <li className="hover:text-gray-400 cursor-pointer">Browse by Language</li>
            </ul>

            <div className="flex items-center space-x-6">
                <img src={search_icon} alt="Search_icon" className="w-6 h-6 cursor-pointer" />
                <p className="hover:text-gray-400 cursor-pointer text-sm">Children</p>
                <img src={bell_icon} alt="Notification" className="w-6 h-6 cursor-pointer" />

                <div
                    className="relative flex items-center space-x-2 cursor-pointer"
                    onClick={handleDropdownToggle} 
                    ref={profileRef}
                    tabIndex={0} 
                    onBlur={handleBlur} 
                >
                    <img src={profile_img} alt="Profile image" className="w-6 h-6" />
                    <img src={caret_icon} alt="Drop_down" className="w-4 h-4" />

                    {isDropdownVisible && (
                        <div className="absolute right-0 top-10 text-sm rounded-md shadow-lg p-2 bg-black">
                            <p onClick={logout} className="hover:text-gray-400 cursor-pointer">Sign Out of Netflix</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;


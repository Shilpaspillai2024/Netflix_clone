import facebok_icon from "../assets/facebook_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import youtube_icon from "../assets/youtube_icon.png";
import instagram_icon from "../assets/instagram_icon.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Questions? Contact us.</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook">
                <img
                  src={facebok_icon}
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src={twitter_icon}
                  alt="Twitter"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  src={youtube_icon}
                  alt="YouTube"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src={instagram_icon}
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Netflix, Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

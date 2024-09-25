import React, { useState } from "react";
import logo from "../assets/logo.png";
import backgroundBanner from "../assets/background_banner.jpg";
import Footer from "../components/Footer";
import { login, signup } from "../firebase";
import netflix_spinner from "../assets/netflix_spinner.gif";

const Login: React.FC = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await login({ email, password });
      } else {
        await signup({ name, email, password });
      }
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="w-full flex justify-center">
          <img src={netflix_spinner} alt="Loading" className="w-60" />
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center min-h-screen text-white"
          style={{
            backgroundImage: `url(${backgroundBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src={logo}
            alt="Netflix logo"
            className="absolute top-8 left-32 w-36"
          />
          <div className="bg-black bg-opacity-75 p-8 rounded-md shadow-lg w-96 relative z-10">
            <h2 className="text-3xl font-bold mb-8">{signState}</h2>
            <form>
              {signState === "Sign Up" && (
                <div className="mb-4">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                    className="w-full p-3 bg-black rounded border border-gray-600 focus:outline-none focus:border-white"
                    placeholder="Name"
                  />
                </div>
              )}
              <div className="mb-4">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="w-full p-3 bg-black rounded border border-gray-600 focus:outline-none focus:border-white"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  className="w-full p-3 bg-black rounded border border-gray-600 focus:outline-none focus:border-white"
                  placeholder="Password"
                />
              </div>
              <button
                onClick={user_auth}
                type="submit"
                className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold"
              >
                {signState}
              </button>
            </form>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm hover:underline">
                Need Help?
              </a>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <div className="mt-4 text-center">
              {signState === "Sign In" ? (
                <p className="text-sm">
                  New to Netflix?{" "}
                  <span
                    onClick={() => setSignState("Sign Up")}
                    className="hover:underline cursor-pointer"
                  >
                    Sign up now.
                  </span>
                </p>
              ) : (
                <p className="text-sm">
                  Already have an account?{" "}
                  <span
                    onClick={() => setSignState("Sign In")}
                    className="hover:underline cursor-pointer"
                  >
                    Sign In.
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Login;

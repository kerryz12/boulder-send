import { useState } from "react";
import { Menu, X, Users, MountainSnow } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2 flex-shrink-0">
            <MountainSnow className="h-8 w-8 text-blue-500" />
            <span className="font-bold text-2xl text-slate-800">
              <span className="text-blue-500">Boulder</span>Send
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="login"
              className="text-slate-600 hover:text-blue-500 font-medium transition-colors duration-150"
            >
              Login
            </a>
            <a
              href="signup"
              className="bg-blue-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Sign Up Free
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-blue-500 focus:outline-none p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-200">
          <div className="pt-4 pb-3 border-t border-slate-200">
            <div className="flex items-center px-5 mb-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-slate-800">
                  Your Account
                </div>
                <div className="text-sm font-medium leading-none text-slate-500 mt-1">
                  Access your climbs
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-2">
              <a
                href="login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-blue-500 transition-colors duration-150"
              >
                Login
              </a>
              <a
                href="signup"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-150"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import {
  ChevronRight,
  Map,
  Users,
  MountainSnow,
  Trophy,
  ThumbsUp,
} from "lucide-react";

import HeroImage from "../assets/hero_photo.jpg";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="pt-16 relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-100"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50/90 via-sky-50/80 to-blue-100/30 z-10"></div>
        <div className="absolute right-0 top-0 w-4/5 md:w-3/4 h-full z-0">
          <div
            className="relative w-full h-full bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${HeroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-sky-100/95"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden opacity-30 pointer-events-none z-20">
        <div
          className="w-full h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400"
          style={{ transform: "skewY(-3deg) translateY(-8px)" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row py-16 lg:py-24 items-center">
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left pb-12 lg:pb-0">
            <div className="mb-4 flex justify-center lg:justify-start">
              <div className="bg-blue-500 text-white p-2 rounded-lg shadow-lg transform rotate-3">
                <MountainSnow className="h-6 w-6" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Conquer Your{" "}
              <span className="text-blue-500 relative">
                Climbs
                <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 opacity-40 -rotate-1"></span>
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
              Connect with fellow climbers, celebrate your sends, and discover
              new routes with BoulderSend — where your climbing community
              awaits!
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                <Trophy className="h-4 w-4 mr-1" /> Track Progress
              </div>
              <div className="flex items-center bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                <Users className="h-4 w-4 mr-1" /> Find Partners
              </div>
              <div className="flex items-center bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                <ThumbsUp className="h-4 w-4 mr-1" /> Share Sends
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center lg:justify-start">
              <a
                href="#signup"
                className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
              >
                Start Climbing <ChevronRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#learn-more"
                className="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-200 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-50 shadow hover:shadow-md transition-all duration-300 ease-in-out flex items-center justify-center"
              >
                Explore Routes
              </a>
            </div>

            <div className="mt-10 flex items-center text-sm text-slate-500 justify-center lg:justify-start">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center bg-gradient-to-br from-blue-${
                      i * 100 + 300
                    } to-indigo-${i * 100 + 300} shadow-sm`}
                  >
                    <Users className="h-4 w-4 text-white" />
                  </div>
                ))}
              </div>
              <span>
                Join <strong>10,000+</strong> climbers crushing it worldwide!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

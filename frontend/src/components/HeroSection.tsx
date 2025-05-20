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
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50/90 via-sky-50/80 to-blue-100/50 z-10"></div>
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

          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-yellow-400 shadow-lg transform rotate-12 border-4 border-white z-10"></div>
              <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-300/50 shadow-2xl overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="pt-6 px-2 pb-4 sm:pt-8 sm:px-4 sm:pb-6">
                  <div className="h-2 w-16 bg-slate-400 rounded-full mx-auto mb-2"></div>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-inner">
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-slate-800 font-semibold text-base">
                            Boulder Crush Gym
                          </div>
                          <div className="text-slate-500 text-xs">
                            Your Progress
                          </div>
                        </div>
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow transform rotate-3">
                          <Map className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      {[
                        {
                          label: "V3-V4",
                          percent: 75,
                          color: "bg-gradient-to-r from-green-400 to-green-500",
                        },
                        {
                          label: "V5-V6",
                          percent: 45,
                          color: "bg-gradient-to-r from-blue-400 to-blue-500",
                        },
                        {
                          label: "V7-V8",
                          percent: 20,
                          color:
                            "bg-gradient-to-r from-purple-400 to-purple-500",
                        },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between text-xs mb-0.5">
                            <span className="text-slate-600 font-medium">
                              {item.label}
                            </span>
                            <span className="text-slate-800 font-bold">
                              {item.percent}%
                            </span>
                          </div>
                          <div className="h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                            <div
                              className={`h-full ${item.color}`}
                              style={{ width: `${item.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}

                      <div className="pt-2">
                        <div className="text-slate-800 font-semibold text-base mb-1.5 flex items-center">
                          <Trophy className="h-4 w-4 mr-2 text-amber-500" />
                          Recent Sends
                        </div>
                        {[
                          {
                            name: "Crimpy Overhang",
                            grade: "V5",
                            time: "2d ago",
                            color: "blue",
                          },
                          {
                            name: "Roof Crusher",
                            grade: "V4",
                            time: "5d ago",
                            color: "green",
                          },
                        ].map((item) => (
                          <div
                            key={item.name}
                            className="bg-slate-50 rounded-lg p-2.5 mb-1.5 flex justify-between items-center border border-slate-200/80 hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-0.5"
                          >
                            <div>
                              <div className="text-slate-700 text-sm font-medium">
                                {item.name}
                              </div>
                              <div className="text-slate-500 text-xs">
                                {item.time}
                              </div>
                            </div>
                            <div
                              className={`bg-${item.color}-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow transform rotate-1`}
                            >
                              {item.grade}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-300 to-rose-300 rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-br from-sky-300 to-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none [animation-delay:-2s]"></div>

              <div className="absolute -bottom-4 right-12 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-30 animate-pulse pointer-events-none [animation-delay:-3s]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

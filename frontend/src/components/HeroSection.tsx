import { ChevronRight, Map, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="pt-16 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-200"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row py-16 lg:py-24 items-center">
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left pb-12 lg:pb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Share Your <span className="text-blue-500">Climbing</span>{" "}
              Journey
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
              Connect with climbers, track your progress, and discover new
              routes with BoulderSend—the social platform built for indoor and
              outdoor climbing enthusiasts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center lg:justify-start">
              <a
                href="#signup"
                className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto bg-white text-slate-700 border border-slate-300 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-slate-100 hover:border-slate-400 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                Watch Demo
              </a>
            </div>
            <div className="mt-10 flex items-center text-sm text-slate-500 justify-center lg:justify-start">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center bg-blue-${
                      i * 100 + 200
                    } shadow-sm`}
                  >
                    <Users className="h-4 w-4 text-white" />
                  </div>
                ))}
              </div>
              <span>
                Trusted by <strong>10,000+</strong> climbers worldwide
              </span>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div className="bg-slate-700/10 backdrop-blur-xl rounded-[2rem] border border-slate-300/50 shadow-2xl overflow-hidden transform lg:rotate-1">
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
                            Route Progress
                          </div>
                        </div>
                        <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center shadow">
                          <Map className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      {[
                        { label: "V3-V4", percent: 75, color: "bg-green-500" },
                        { label: "V5-V6", percent: 45, color: "bg-blue-500" },
                        { label: "V7-V8", percent: 20, color: "bg-purple-500" },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between text-xs mb-0.5">
                            <span className="text-slate-600">{item.label}</span>
                            <span className="text-slate-800 font-medium">
                              {item.percent}%
                            </span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${item.color}`}
                              style={{ width: `${item.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}

                      <div className="pt-2">
                        <div className="text-slate-800 font-semibold text-base mb-1.5">
                          Recent Sends
                        </div>
                        {[
                          {
                            name: "Crimpy Overhang",
                            grade: "V5",
                            time: "2d ago",
                          },
                          { name: "Roof Crusher", grade: "V4", time: "5d ago" },
                        ].map((item) => (
                          <div
                            key={item.name}
                            className="bg-slate-100/70 rounded-lg p-2.5 mb-1.5 flex justify-between items-center border border-slate-200/80"
                          >
                            <div>
                              <div className="text-slate-700 text-sm font-medium">
                                {item.name}
                              </div>
                              <div className="text-slate-500 text-xs">
                                {item.time}
                              </div>
                            </div>
                            <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

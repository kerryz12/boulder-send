const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "BoulderSend has completely transformed how I track my climbing progress. The community features helped me find consistent climbing partners.",
      author: "Alex J.",
      role: "V7 Boulderer",
      avatar: "A",
    },
    {
      quote:
        "As a climbing gym owner, the analytics BoulderSend provides have been invaluable for understanding what routes our climbers enjoy most.",
      author: "Sarah T.",
      role: "Gym Owner",
      avatar: "S",
    },
    {
      quote:
        "I love how easy it is to find new climbing spots and track my progression. The training plans have helped me improve faster than ever!",
      author: "Michael R.",
      role: "Sport Climber",
      avatar: "M",
    },
  ];

  return (
    <div id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 relative">
            <span className="relative inline-block">
              Loved by Climbers Worldwide
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-bottom-left transition-transform duration-300"></span>
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what the climbing community has to say about their BoulderSend
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-8 relative shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col group"
            >
              <div className="absolute top-6 right-7 text-blue-500/20 text-8xl font-serif opacity-60 transform -translate-y-3 pointer-events-none group-hover:text-blue-500/30 transition-colors duration-300">
                "
              </div>
              <p className="text-slate-600 mb-8 relative z-10 leading-relaxed text-md flex-grow group-hover:text-slate-800 transition-colors duration-300">
                {testimonial.quote}
              </p>
              <div className="flex items-center mt-auto justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="text-slate-800 font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {[
            { count: "10,000+", label: "Active Users" },
            { count: "500+", label: "Climbing Gyms" },
            { count: "100K+", label: "Routes Tracked" },
            { count: "50+", label: "Countries" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-slate-100/70 rounded-lg shadow-md border border-slate-200/60 hover:bg-white hover:border-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-1.5 group-hover:text-blue-600 transition-colors duration-300">
                {stat.count}
              </div>
              <div className="text-slate-600 text-sm font-medium uppercase tracking-wider group-hover:text-slate-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

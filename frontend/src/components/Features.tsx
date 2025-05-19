import { Map, Users, BarChart, Award, Star, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Map className="h-7 w-7 text-blue-500" />,
      title: "Gym & Route Maps",
      description:
        "Explore detailed maps of climbing gyms and outdoor locations with route information and difficulty ratings.",
    },
    {
      icon: <Users className="h-7 w-7 text-blue-500" />,
      title: "Climbing Community",
      description:
        "Connect with other climbers, share tips, and find climbing partners at your favorite locations.",
    },
    {
      icon: <BarChart className="h-7 w-7 text-blue-500" />,
      title: "Progress Tracking",
      description:
        "Monitor your improvement with detailed stats and analytics on your climbing performance.",
    },
    {
      icon: <Award className="h-7 w-7 text-blue-500" />,
      title: "Achievements & Badges",
      description:
        "Earn badges and celebrate milestones as you conquer new challenges and improve your skills.",
    },
    {
      icon: <Star className="h-7 w-7 text-blue-500" />,
      title: "Route Ratings",
      description:
        "Rate and review routes to help others find the best climbing experiences.",
    },
    {
      icon: <Clock className="h-7 w-7 text-blue-500" />,
      title: "Training Plans",
      description:
        "Access personalized training plans designed to help you reach your climbing goals.",
    },
  ];

  return (
    <div id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Everything a Climber Needs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            BoulderSend gives you the tools to track progress, connect with
            peers, and discover your next challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

const CallToAction = () => {
  return (
    <div className="py-20 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-500 to-rose-500 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 ease-out">
          <div className="px-6 py-12 md:p-16 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Ready to Elevate Your Climb?
              </h2>
              <p className="mt-4 text-lg text-blue-50/90 max-w-xl mx-auto md:mx-0">
                Join thousands of climbers tracking their progress and connect
                with the BoulderSend community.
              </p>
            </div>
            <div className="mt-10 md:mt-0 md:ml-8 flex-shrink-0 text-center">
              <a
                href="signup"
                className="inline-block w-full sm:w-auto text-center bg-white px-10 py-4 rounded-lg font-semibold text-lg text-blue-600 hover:bg-slate-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

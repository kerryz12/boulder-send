const SignUpHeader = () => {
  return (
    <div className="text-center mb-8">
      <img
        className="mx-auto h-16 w-auto mb-4 transform hover:scale-105 transition-transform duration-300"
        src="/api/placeholder/120/120"
        alt="BoulderSend Logo"
      />
      <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
        Create your account
      </h2>
      <p className="text-sm text-slate-600 max-w-sm mx-auto">
        Join the BoulderSend community to track your climbing progress and
        connect with fellow climbers
      </p>
    </div>
  );
};

export default SignUpHeader;

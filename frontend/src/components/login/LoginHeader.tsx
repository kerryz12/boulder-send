type LoginHeaderProps = {
  isSignUp: boolean;
};

const LoginHeader = ({ isSignUp }: LoginHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <img
        className="mx-auto h-16 w-auto mb-4 transform hover:scale-105 transition-transform duration-300"
        src="/api/placeholder/120/120"
        alt="BoulderSend Logo"
      />
      <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
        {isSignUp ? "Create your account" : "Welcome back"}
      </h2>
      <p className="text-sm text-slate-600 max-w-sm mx-auto">
        {isSignUp
          ? "Join the BoulderSend community to track your climbing progress"
          : "Sign in to continue your climbing journey with BoulderSend"}
      </p>
    </div>
  );
};

export default LoginHeader;

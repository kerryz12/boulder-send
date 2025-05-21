import { useState } from "react";
import {
  LoginForm,
  SocialLogin,
  LoginHeader,
  ForgotPassword,
} from "../components";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="px-8 pt-8 pb-6">
          <LoginHeader isSignUp={isSignUp} />
          <LoginForm isSignUp={isSignUp} />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">
                  Or continue with
                </span>
              </div>
            </div>
            <SocialLogin />
          </div>
        </div>

        <div className="px-8 py-6 bg-slate-50 border-t border-slate-200">
          {!isSignUp ? (
            <div className="text-center">
              <ForgotPassword />
            </div>
          ) : null}{" "}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors duration-300 cursor-pointer"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Need an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

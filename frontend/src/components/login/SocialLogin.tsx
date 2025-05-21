const SocialLogin = () => {
  const providers = [
    {
      name: "Google",
      color: "bg-white",
      textColor: "text-slate-800",
      hoverColor: "hover:bg-slate-50",
    },
    {
      name: "Apple",
      color: "bg-black",
      textColor: "text-white",
      hoverColor: "hover:bg-slate-800",
    },
    {
      name: "Facebook",
      color: "bg-blue-700",
      textColor: "text-white",
      hoverColor: "hover:bg-blue-800",
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className={`${provider.color} ${provider.textColor} ${provider.hoverColor} inline-flex items-center justify-center py-2 px-4 border border-slate-200 rounded-md shadow-sm text-sm font-medium transition-all duration-300 hover:shadow-md cursor-pointer`}
        >
          {provider.name}
        </button>
      ))}
    </div>
  );
};

export default SocialLogin;

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  noHoverEffect?: boolean; // To optionally disable hover
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  title,
  titleClassName = "text-xl font-semibold text-slate-800 mb-4",
  noHoverEffect = false,
}) => {
  const hoverClasses = noHoverEffect
    ? ""
    : "hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1";

  return (
    <div
      className={`bg-slate-50 border border-slate-200/80 rounded-xl p-6 shadow-lg ${hoverClasses} ${className}`}
    >
      {title && <h2 className={titleClassName}>{title}</h2>}
      {children}
    </div>
  );
};

export default Card;

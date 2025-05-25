import React from "react";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  return (
    <img
      className={`${sizeClasses[size]} rounded-full object-cover border-2 border-blue-500 ${className}`}
      src={
        src ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(
          alt
        )}&background=3B82F6&color=fff&bold=true`
      } // background=3B82F6 is blue-500
      alt={alt}
    />
  );
};

export default Avatar;

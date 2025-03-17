import React from 'react';

const MagicButton = ({
    title, icon, position, handleClick
} : {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-2xl p-[1px] focus:outline-none md:w-60 md:mt-10"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9d4edd_0%,#5a189a_50%,#9d4edd_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-black px-7 text-sm font-medium text-light-green backdrop-blur-3xl gap-2`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default MagicButton;

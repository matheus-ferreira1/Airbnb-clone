"use client";

import Image from "next/image";

const Avatar: React.FC = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;

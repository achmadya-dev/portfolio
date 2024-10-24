"use client";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 w-8/12">
        <h1 className="text-4xl font-bold">Hi! I am Achmadya</h1>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur
          maxime harum non. Asperiores, quos doloribus natus ab, ea voluptas
          voluptates architecto fugit nostrum quam facilis similique unde, ipsum
          consequatur?
        </p>
      </div>
      <div className="w-3/12 flex-1">
        <Image
          src="/images/profile.jpg"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full border border-gray-100 h-auto w-36"
        />
      </div>
    </div>
  );
};

export default Intro;

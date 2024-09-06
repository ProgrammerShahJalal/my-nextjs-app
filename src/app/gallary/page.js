import Image from "next/image";
import React from "react";
import roomImg from "../../assets/room.png";

export const metadata = {
  title: "Room",
  description: "Room description",
};

const GallaryPage = () => {
  return (
    <div className="min-h-screen text-center">
      <h1>Gallary Page</h1>
      <div className="gallary-container">
        <div className="gallary-item">
          <Image
            className="mx-auto my-5 rounded-xl shadow-lg"
            src={roomImg}
            alt="image1"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default GallaryPage;

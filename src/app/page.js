import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();

  throw new Error("Error from homepage");

  return (
    <div className="my-10">
      <div className="mx-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {shoes?.slice(0, 3).map((shoe) => {
          return (
            <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {shoe.title}!
                  <div className="badge badge-secondary">
                    {shoe.recentPrice}
                  </div>
                </h2>
                <p>{shoe.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {" "}
                    Regular Price: {shoe.regularPrice}
                  </div>
                  <div className="badge badge-outline">
                    Price Now: {shoe.recentPrice}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center my-5">
        <button className="px-5 py-3 rounded-lg bg-black text-white">
          <Link href={"/allShoes"}>See More</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;

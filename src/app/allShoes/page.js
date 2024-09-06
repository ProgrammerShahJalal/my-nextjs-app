import Image from "next/image";
import React from "react";

const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    catch: "no-store",
  });
  const shoes = await res.json();

  return (
    <div>
      <h1 className="text-center font-semibold text-xl">All Shoes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-4 gap-4 my-10">
        {shoes?.map((shoe) => {
          return (
            <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl m-4">
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
    </div>
  );
};

export default AllShoesPage;

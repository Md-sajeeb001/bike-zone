import { useLoaderData } from "react-router-dom";
import BikeCard from "./BikeCard";
import { useState } from "react";

const Bikes = () => {
  const bikesData = useLoaderData();
  const [bikes, setBikes] = useState(bikesData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {bikes.map((bike) => (
        <BikeCard
          key={bike._id}
          bike={bike}
          bikes={bikes}
          setBikes={setBikes}
        ></BikeCard>
      ))}
    </div>
  );
};

export default Bikes;

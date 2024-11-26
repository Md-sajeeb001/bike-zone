import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const BikeCard = ({ bike, setBikes, bikes }) => {
  const { _id, name, hight, waight, quantity, photo } = bike;

  const handelRemove = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addBike/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const newBike = bikes.filter((bike) => bike._id !== _id);
              setBikes(newBike);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className=" bg-base-100 shadow-xl">
        <div className="w-full h-[240px]">
          <img src={photo} alt="bike" className="w-full h-full p-3" />
        </div>
        <div className="px-6 py-3">
          <h2 className="card-title">{name}</h2>
          <li>{hight}</li>
          <li>{waight}</li>
          <li>{quantity}</li>
          <div className="card-actions justify-end ">
            <button
              onClick={() => handelRemove(_id)}
              className="btn bg-orange-800 text-white"
            >
              Remove
            </button>
            <button className="btn bg-orange-800 text-white">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpDateBike = () => {
  const bikesData = useLoaderData();

  const { _id, name, quantity, hight, waight, engine, category, photo } =
    bikesData;

  const handelAddBikes = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const quantity = formData.get("quantity");
    const hight = formData.get("hight");
    const waight = formData.get("waight");
    const engine = formData.get("engine");
    const category = formData.get("category");
    const photo = formData.get("photo");

    const bikeInfo = { name, quantity, hight, waight, engine, category, photo };

    fetch(`http://localhost:5000/addBike/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bikeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Bike Update Successfuly",
            icon: "success",
            confirmButtonText: "Cool",
          });
          formData.reset();
        }
      });
  };

  return (
    <div className="bg-[#F4F3F1] my-10">
      <h2 className="text-3xl font-bold text-center py-8 underline underline-offset-4">
        UpDate Bike
      </h2>
      <form onSubmit={handelAddBikes} className="card-body">
        {/* row */}
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Bike Name</span>
            </label>
            <input
              defaultValue={name}
              name="name"
              type="name"
              placeholder="bike name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Avilabel Quantity</span>
            </label>
            <input
              defaultValue={quantity}
              name="quantity"
              type="quantity"
              placeholder="avilabel quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* row */}
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Seat height</span>
            </label>
            <input
              defaultValue={hight}
              name="hight"
              type="hight"
              placeholder="seat height"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Waight</span>
            </label>
            <input
              defaultValue={waight}
              name="waight"
              type="waight"
              placeholder="bike waight"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* row */}
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Engine type</span>
            </label>
            <input
              defaultValue={engine}
              name="engine"
              type="engine"
              placeholder="bike engine type"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              defaultValue={category}
              name="category"
              type="category"
              placeholder="bike category"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* row */}
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              defaultValue={photo}
              name="photo"
              type="photo"
              placeholder="bike photo"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Bike</button>
        </div>
      </form>
    </div>
  );
};

export default UpDateBike;

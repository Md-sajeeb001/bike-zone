import Swal from "sweetalert2";

const AddBikes = () => {
  const handelAddBikes = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const quantity = formData.get("quantity");
    const hight = formData.get("hight");
    const waight = formData.get("waight");
    const engine = formData.get("engine");
    const category = formData.get("category");
    const photo = formData.get('photo')

    const bikeInfo = { name, quantity, hight, waight, engine, category, photo };
    console.log(bikeInfo);

    fetch("http://localhost:5000/addBike", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bikeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Bike Added Successfuly",
            icon: "success",
            confirmButtonText: "Cool",
           
          });
          formData.reset()
        }
      });
  };

  return (
    <div className="bg-[#F4F3F1] my-10">
      <form onSubmit={handelAddBikes} className="card-body">
        {/* row */}
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Bike Name</span>
            </label>
            <input
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

export default AddBikes;

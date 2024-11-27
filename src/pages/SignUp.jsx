import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, userUpDate } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  console.log(showPass)


  const handelResigter = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const photo = formData.get("photo");
    const checkbox = formData.get("checkbox");

    const passwordVlidation = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordVlidation.test(password)) {
      toast.error("password should be upperCase and lowerCase", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (password > 6) {
      toast.error("Password should be at least 6 characters", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!checkbox) {
      toast.error("accept our terms and condition", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res);
        if (res.user) {
          Swal.fire({
            title: "success",
            text: "User Register Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
        userUpDate({ displayName: name, photoURL: photo })
          .then((res) => {
            if (res) {
              Swal.fire({
                title: "Updated",
                text: "User Updated Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          })
          .catch((error) => {
            if (error) {
              Swal.fire({
                title: "Error!",
                text: "user can't Update",
                icon: "error",
                confirmButtonText: "Cool",
              });
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
        
        if (error.message) {
          Swal.fire({
            title: "Error!",
            text: "user alredy exist",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center underline underline-offset-4">
        Register Now!
      </h2>
      <div>
        <form onSubmit={handelResigter} className="sm:card-body px-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button onClick={()=>setShowPass(!showPass)}>show</button>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              name="photo"
              type="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label gap-5 justify-start cursor-pointer">
              <input
                name="checkbox"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              <span className="label-text">accept our terms and condition</span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>

          <label className="label text-center">
            <p>
              Already Have An Account ?{" "}
              <Link className="text-red-500 hover:underline " to="/login">
                Log in
              </Link>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

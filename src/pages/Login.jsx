import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);


  const handelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        console.log("user log in successful", res.user);
        if (res.user) {
          Swal.fire({
            title: "success",
            text: "User Login Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        if (error) {
          toast.error(`${error.message}`, {
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
      });

    console.log(email, password);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center underline underline-offset-4">
        Log Now!
      </h2>
      <div>
        <form onSubmit={handelLogin} className="card-body">
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

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              className="absolute right-10 top-[52px] text-xl"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <FaRegEye></FaRegEye>
              ) : (
                <FaRegEyeSlash></FaRegEyeSlash>
              )}
            </button>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>

          <label className="label text-center">
            <p>
              Dont Have An Account ?{" "}
              <Link className="text-red-500 hover:underline " to="/signup">
                Register
              </Link>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;

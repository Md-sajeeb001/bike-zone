import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { logInUser, forgetPassword } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();

  const handelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
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
  };

  const hadelForgetPass = () => {
    const email = emailRef.current.value;
    console.log(email);
    forgetPassword(email)
      .then((res) => {
        console.log("varification code send, please cheack email", res);
        toast("please check you email, to reset password", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.log(error);

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
              ref={emailRef}
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

          <label className="label">
            <Link
              onClick={hadelForgetPass}
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>

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

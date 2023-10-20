import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/FireBase";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [ showPassword, setShowPassword] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();



  const handleGoogleSingIn = () =>{
    signInWithPopup(auth,provider)
    .then(result =>{
      console.log(result.user);
      swal("Good job!", "Login Successfully! With Google ", "success");
    })
    .catch(error => {
      console.error(error);
    })
  }

  const {signIn} = useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    
    signIn(email, password)
    .then(result => {
      console.log(result.user);
      navigate(location.state ? location.state : '/')
      swal("Good job!", "Login Successfully!", "success");
    })
    .catch(error =>{
      console.error(error);
      swal("Incorrect email and password ", "Please enter the correct email and password", "error");
  })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login now!</h1> 
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email" 
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type= {showPassword ? "text":"password"}placeholder="Password" name="password" className="input input-bordered" required />
          <span className="relative bottom-8  left-[300px]" onClick={()=> setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
            }
          </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button> 
            </div>
            <p className="text-center pb-4" >Do not have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p> 
            <button onClick={handleGoogleSingIn} className="flex py- justify-center items-center"> <FcGoogle className="text-4xl "></FcGoogle> </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;

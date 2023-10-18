import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import swal from "sweetalert";


const Register = () => {

  const {signIn} = useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    
    signIn(email, password)
    .then(result => {
      console.log(result.user);
      swal("Good job!", "Login Successfully!", "success");
    })
    .catch(error => console.error(error))
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
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button> 
            </div>
            <p className="text-center pb-4" >Do not have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

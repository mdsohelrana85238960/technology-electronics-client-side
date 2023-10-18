import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "./Provider/AuthProvider";




const Register = () => {

  const {createUser} = useContext(AuthContext);
  


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log(name, email, password, photo );
    
    createUser(email,password)
        .then(result =>{
            console.log(result.user);
            updateProfile(result.user,{
             displayName: name ,
             photoURL: photo,
            })
        })

        .then(() => {
          swal("Good job! User Created", "Login Successfully!", "success");
        })
      

        .catch(error =>{
            console.error(error);
            swal("error", "Check Your input", "error");
        })

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Register now!</h1> 
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
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
              <button className="btn btn-primary">Register</button> {/* Updated button text */}
            </div>
            <p className="text-center pb-4">
              Already have an account?{" "}
              <Link className="text-blue-600 font-bold" to="/login">
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

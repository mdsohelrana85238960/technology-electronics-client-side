import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSingOut = () =>{
    logOut()
    .then(swal( "Logout Successfully!", ))

  }

    const navLinks = <>
        <li><NavLink className=' text-lg' to='/'> Home </NavLink></li>
        <li><NavLink  className=' text-lg' to='/product'> Add Product </NavLink></li>
        <li><NavLink className=' text-lg' to='/contact'> My Cart </NavLink></li>
        <li><NavLink className=' text-lg' to='/login'> Login </NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <img className="w-40" src="https://digistore.com.np/wp-content/uploads/2019/09/digistore_logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {
          user ? <div className="flex gap-2 items-center justify-center ">  <div> <img className="w-10 h-10 rounded-full mx-auto " src={user.photoURL
          } alt="" /> <p className=" text-blue-800 font-bold">{user.displayName
          } </p> </div>   <button onClick={handleSingOut} className="btn">Sing Out</button> </div>
          :
          <Link to= '/login'>
          <button className="btn">Login</button>
          </Link>
        }
        </div>
      </div>
    );
};

export default Navbar;
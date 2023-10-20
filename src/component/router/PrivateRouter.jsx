import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center mt-80"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if (user) {
        return children
    } 
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRouter;
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate} from "react-router-dom";


const PrivateProfile = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateProfile;
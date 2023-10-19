import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
import { CirclesWithBar } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="h-screen w-full flex justify-center items-center">
            <CirclesWithBar
                height="100"
                width="100"
                color="red"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else {
        return children
    }

};


PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;
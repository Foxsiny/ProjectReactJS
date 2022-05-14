import useAuth from "../hooks/AuthProvider";

import {Navigate, useLocation, Outlet} from "react-router-dom";

const RequireAuth = () => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user ){
        return <Navigate to="/login" state={{ from: location }} />
    }

    return < Outlet />;
};

export default RequireAuth;
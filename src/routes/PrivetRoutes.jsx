import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<span className="text-center loading loading-spinner loading-lg"></span>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to={"/login"}></Navigate>;
};

PrivetRoutes.propTypes = {
	children: PropTypes.node,
};

export default PrivetRoutes;

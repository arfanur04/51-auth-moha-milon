import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
	const authInfo = useContext(AuthContext);
	console.log(`authInfo:`, authInfo);

	return (
		<div>
			<h2>This is Home: {authInfo.name}</h2>
		</div>
	);
};

export default Home;

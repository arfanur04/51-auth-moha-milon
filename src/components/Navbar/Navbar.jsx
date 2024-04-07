import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut()
			.then(() => {
				console.log("log out successfully");
				navigate("/login");
			})
			.catch((err) => {
				console.error("err", err);
			});
	};

	const navLinks = (
		<>
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li>
				<NavLink to={"/login"}>Login</NavLink>
			</li>
			<li>
				<NavLink to={"/register"}>Register</NavLink>
			</li>
			<li>
				<NavLink to={"/orders"}>Orders</NavLink>
			</li>
			{user && (
				<>
					<li>
						<NavLink to={"/profile"}>Profile</NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard"}>Dashboard</NavLink>
					</li>
				</>
			)}
		</>
	);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navLinks}
					</ul>
				</div>
				<a className="text-xl btn btn-ghost">Moha Milon</a>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 menu menu-horizontal">{navLinks}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<>
						<span>{user?.email}</span>
						<a
							onClick={handleLogOut}
							className="btn btn-sm"
						>
							Sign Out
						</a>
					</>
				) : (
					<Link to={"/login"}>
						<button className="btn btn-sm">Login</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;

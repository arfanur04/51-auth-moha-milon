import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(name, email, password);

		// create user in firebase
		createUser(email, password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => {
				console.error("err", err);
			});
	};

	return (
		<div className="min-h-screen hero bg-base-200">
			<div className="flex-col hero-content">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Register now!</h1>
				</div>
				<div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
					<form
						onSubmit={handleRegister}
						className="card-body"
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="input input-bordered"
								required
							/>
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
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className="mt-6 form-control">
							<button className="btn btn-primary">Register</button>
						</div>
					</form>
					<div className="px-8 pb-8">
						<p>
							Already registered? Please{" "}
							<Link to={"/login"}>
								<button className="btn btn-link">Login</button>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
	const { signInUser, signInWithGoogle } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);

		signInUser(email, password)
			.then((result) => {
				console.log(result.user);
				e.target.reset();
				navigate("/");
			})
			.catch((err) => {
				console.error("err", err);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then((result) => {
				console.log(result.user);
				navigate("/");
			})
			.catch((err) => {
				console.error("err", err);
			});
	};

	return (
		<div className="min-h-screen hero bg-base-200">
			<div className="flex-col hero-content">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Login now!</h1>
				</div>
				<div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
					<form
						onSubmit={handleLogin}
						className="card-body"
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
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
								placeholder="password"
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
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
					<div className="px-8 pb-8">
						<p>
							New to this site? Please{" "}
							<Link to={"/register"}>
								<button className="btn btn-link">Register</button>
							</Link>
						</p>
						<p>
							<button
								onClick={handleGoogleSignIn}
								className="btn btn-ghost"
							>
								Google
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

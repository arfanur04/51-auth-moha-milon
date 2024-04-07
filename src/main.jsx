import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import Orders from "./components/Orders/Orders";
import PrivetRoutes from "./routes/PrivetRoutes";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Profile from "./components/Profile/Profile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/orders",
				element: (
					<PrivetRoutes>
						<Orders></Orders>
					</PrivetRoutes>
				),
			},
			{
				path: "/profile",
				element: (
					<PrivetRoutes>
						<Profile></Profile>
					</PrivetRoutes>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);

import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import HomeScreen from "./assets/screens/home";
import RegisterScreen from "./assets/screens/auth/register";
import LoginScreen from "./assets/screens/auth/login";
import NotesScreen from "./assets/screens/notes/index";
import UsersEditScreen from "./assets/screens/users/edit";
import PrivateRoute from "./assets/screens/auth/private_router";

const App = () => {
	let routes = useRoutes([
		{ path: "/", element: <HomeScreen /> },
		{ path: "/register", element: <RegisterScreen /> },
		{ path: "/login", element: <LoginScreen /> },
		{
			path: "/notes",
			element: (
				<PrivateRoute>
					<NotesScreen />
				</PrivateRoute>
			),
		},
		{
			path: "/users/edit",
			element: (
				<PrivateRoute>
					<UsersEditScreen />
				</PrivateRoute>
			),
		},
	]);
	return routes;
};

const AppWrapper = () => {
	return (
		<Router>
			<App />
		</Router>
	);
};

export default AppWrapper;

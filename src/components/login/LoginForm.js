import React, { useState } from "react";

const LoginForm = () => {
	const [login, setLogin] = useState({ username: "", password: "" });

	const handleInputChange = (event) => {
		setLogin({ ...login, [event.target.name]: event.target.value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					name="username"
					type="text"
					placeholder="Username"
					value={login.username}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					value={login.password}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<button type="submit">Login</button>
			</div>
		</form>
	);
};

export default LoginForm;

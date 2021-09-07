import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../utils/auth";
const LoginForm = () => {
	const history = useHistory();
	const [form, setForm] = useState({ username: "", password: "" });

	const handleInputChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		login(form['username'], form.password) ?
			history.push("/contacts") :
			alert("Access Denied");
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
					value={form.username}
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
					value={form.password}
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

import React, { useState } from "react";
import { createUser } from "../../utils/auth";

const RegisterForm = () => {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	function handleInputChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleFormSubmit(event) {
        event.preventDefault();
        if (form.username === "" || form.password === "")
            alert("your missing someting!");
        else
        createUser(form.username, form.password);
	}

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
				<button type="submit">Sign Up</button>
			</div>
		</form>
	);
};

export default RegisterForm;

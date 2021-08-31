import React, { useState } from "react";
import { createContact } from "../../utils/contacts";

const ContactCreateForm = () => {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
		profilePic: "",
	});

	const handleInputChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleFormSubmit = (event) => {
        event.preventDefault();
        createContact(form);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<img src={form.profilePic} alt="Profile preview." />
			</div>
			<div>
				<div>
					<input
						type="text"
						placeholder="First Name"
						name="firstName"
						value={form.firstName}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Last Name"
						name="lastName"
						value={form.lastName}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<input
						type="tel"
						placeholder="Phone Number"
						name="phoneNumber"
						value={form.phoneNumber}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="Email"
						name="email"
						value={form.email}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Address"
						name="address"
						value={form.address}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Profile Picture Url"
						name="profilePic"
						value={form.profilePic}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<button type="submit">Add Contact</button>
				</div>
			</div>
		</form>
	);
};

export default ContactCreateForm;

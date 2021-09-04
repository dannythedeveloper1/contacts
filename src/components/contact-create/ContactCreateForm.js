import { v4 as uuidv4 } from 'uuid';
import React, { useContext, useState } from "react";
import { createContact } from "../../utils/contacts";
import { ContactContext } from "../Context/ContactContext";
import { Input, Button, Form, Avatar } from "../styles/Styles";
const ContactCreateForm = () => {
	const [contacts, setContacts] = useContext(ContactContext);
	const [form, setForm] = useState({
		id: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
		profilePic: "",
	});

	const handleInputChange = (event) => {
		setForm({ id:uuidv4(), ...form , [event.target.name]: event.target.value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		setContacts([...contacts, form]);
		setForm({
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: "",
			address: "",
			profilePic: "",
		});
	};

	return (
		<Form onSubmit={handleFormSubmit}>
			<div>
				<Avatar src="https://i.pravatar.cc/300?u=1" alt="Profile preview." />
			</div>
			<div>
				<div>
					<Input
						type="text"
						placeholder="First Name"
						name="firstName"
						value={form.firstName}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<Input
						type="text"
						placeholder="Last Name"
						name="lastName"
						value={form.lastName}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<Input
						type="tel"
						placeholder="Phone Number"
						name="phoneNumber"
						value={form.phoneNumber}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<Input
						type="email"
						placeholder="Email"
						name="email"
						value={form.email}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<Input
						type="text"
						placeholder="Address"
						name="address"
						value={form.address}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<Input
						type="text"
						placeholder="Profile Picture Url"
						name="profilePic"
						value={form.profilePic}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<Button type="submit" onClick={handleFormSubmit}>Add Contact</Button>
				</div>
			</div>
		</Form>
	);
};

export default ContactCreateForm;

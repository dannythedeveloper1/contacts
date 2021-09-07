import ContactCard from "./ContactCard";
import { ContactContext } from "../Context/ContactContext";
import { useContext} from "react";
import { useHistory } from "react-router-dom";
// import ContactDetailsCard from "../contact-details/ContactDetailsCard";
const ContactList = () => {
	const history = useHistory();
	const [contacts, setContacts] = useContext(ContactContext);
	// const [show, setShow] = useState(false);
	
	// const handleClick = () => {
	// 	console.log("clicked")
	// 	setShow(true);
	// }

	console.log(contacts);
	const styles = {
		border: "1px solid black",
		margin: "10% 20%",
		backgroundColor: "lightgray",
	};
	return (
		<div style={styles}>
			{contacts.map((contact) => (
				<ContactCard
					key={contact.id}
					id={contact.id}
					firstName={contact.firstName}
					lastName={contact.lastName}
					phoneNumber={contact.phoneNumber}
					profilePic={contact.profilePic}
					// onClick={handleClick}
				/>
			))}
			{/* {show && <ContactDetailsCard  />} */}
			<button
				style={{ marginLeft: "43%", marginBottom: "10px" }}
				onClick={() => history.push("/login")}
			>
				Log Out
			</button>
		</div>
	);
};

export default ContactList;

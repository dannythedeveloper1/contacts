import { useContext } from "react";
import styled from "styled-components";
// import { deleteContact } from "../../utils/contacts";
import { ContactContext } from "../Context/ContactContext";
export const Container = styled.div`
    margin:5% 10%;
    padding:10px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border:none;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
		0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;
const ContactCard = ({
    id="",
	firstName = "",
	lastName = "",
	phoneNumber = "",
	profilePic = "",
}) => {

    const [contacts, setContacts] = useContext(ContactContext);

    const styles = {
        img: {
            borderRadius: "100%",
            width: "100px",
        },
        name: {
            width:"250px",
            display: "flex",
            justifyContent: "space-around",
            alignItems:"center"
        },
        border: {
            borderLeft:"1px dotted gray",
            marginLeft:"5px",
            
        },
        p: {
            margin:0,
        },
        button:{
            borderRadius: "50%",
            border:"none"
        }
    }
    const removeContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }

	return (
		<Container>
			<div style={styles.name}>
				<div>
					<img
						style={styles.img}
						src={profilePic}
						alt={`Profile of ${firstName} ${lastName}.`}
					/>
                </div>
                {/* <span style={styles.border}></span> */}
				<div style={styles.border}>
					<p style={styles.p}>
						{firstName} {lastName}
					</p>
					<p style={styles.p}>{phoneNumber}</p>
				</div>
			</div>
			<div>
				<button style={styles.button} onClick={()=>removeContact(id)}>X</button>
			</div>
		</Container>
	);
};


export default ContactCard;

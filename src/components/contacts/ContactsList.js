import ContactCard from "./ContactCard"
import { ContactContext } from "../Context/ContactContext"
import { useContext } from "react"
const ContactList = () => {

    const [contacts,setContacts] = useContext(ContactContext);
    console.log(contacts);
    const styles = {
        border: "1px solid black",
        margin: "10% 20%",
        backgroundColor:"lightgray",
    }
    return (
        <div style={styles}>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    id={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </div>
    )
}

export default ContactList;
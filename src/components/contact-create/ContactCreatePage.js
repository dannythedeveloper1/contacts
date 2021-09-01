import ContactCreateForm from "./ContactCreateForm";

const ContactCreatePage = () => {
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }
    return (
        <div style={styles}>
            <ContactCreateForm />
        </div>
    )
}

export default ContactCreatePage;
// import styled from "styled-components";
const ContactDetailsCard = ({ contact }) => {
	const styles = {
		container: {
            backgroundColor: "white",
            margin: "5% 10%",
            padding:"10%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
			justifyContent: "center",
			border: "none",
			boxShadow:
				" 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
        },
        img: {
            borderRadius: "100%",
            height:"100px"
        },
        bold: {
            fontSize: "small",
          fontWeight:"bold",  
        },
        underline: {
           textDecoration:"underline"  
        }
	};

	return (
		<div style={styles.container}>
			<div>
				<img
					style={styles.img}
					src={contact?.profilePic}
					alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}
				/>
			</div>
			<div style={styles.name}>
				<p>
					{contact?.firstName} {contact?.lastName}
				</p>
				<dl>
					<dt style={styles.bold}>Phone Number</dt>
					<dd>{contact?.phoneNumber}</dd>

					<dt style={styles.bold}>Email</dt>
					<dd style={styles.underline}>{contact?.email}</dd>

					<dt style={styles.bold}>Address</dt>
					<dd>{contact?.address}</dd>
				</dl>
			</div>
		</div>
	);
};

export default ContactDetailsCard;

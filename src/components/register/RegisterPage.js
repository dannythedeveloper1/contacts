import { Link } from "react-router-dom";
import { Container } from "../styles/Styles";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
    const styles = {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		};
	return (
		<div style={styles}>
			<Container>
				<RegisterForm />
				<div>
					<p>
						Already have an account? <Link to="/login">Login</Link>.
					</p>
				</div>
			</Container>
		</div>
	);
};

export default RegisterPage;

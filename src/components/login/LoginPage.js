import { Link } from "react-router-dom";
import { Container } from "../styles/Styles";
import LoginForm from "./LoginForm";

const LoginPage = (props) => {
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
    }
	return (
		<div style={styles}>
			<Container>
				<LoginForm />
				<div>
					<p>
						Don't have an account? <Link to="/register">Register</Link>.
					</p>
				</div>
			</Container>
		</div>
	);
};

export default LoginPage;

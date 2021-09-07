export const login = (username, password) => {
	const auth = JSON.parse(localStorage.getItem("auth")) ?? {};
	// Passwords should never be stored in plain text as is done in the code below.
	// This code serves as just a demonstration and is not intended as an example
	// of production ready code.
    console.log(auth[username]?.password === password);
	return auth[username]?.password === password;
};

export const createUser = (username, password) => {
	const auth = JSON.parse(localStorage.getItem("auth")) ?? {};

    if (auth[username]) {
        console.log(auth[username]);
		// throw new Error(`User ${username} already exists.`);
		alert(`User ${username} already exists.`);
    } else {
        console.log(auth[username]);
		// Passwords should never be stored in plain text as is done in the code below.
		// This code serves as just a demonstration and is not intended as an example
		// of production ready code.
		auth[username] = { password: password };
		localStorage.setItem("auth", JSON.stringify(auth));
	}
};

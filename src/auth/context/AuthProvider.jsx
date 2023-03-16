import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
	const initialAuth = localStorage.getItem('logged') == 'true' ? true : false;
	const [isLogged, setIsLogged] = useState(initialAuth);
	const navigate = useNavigate();

	const onLogin = () => {
		setIsLogged(true);
		navigate('/', { replace: true });
	};

	const onLogout = () => {
		setIsLogged(false);
		navigate('/login', { replace: true });
	};

	// console.log(isLogged, typeof isLogged);

	useEffect(() => {
		localStorage.setItem('logged', isLogged);

		if (!isLogged) {
			navigate('/login', {
				replace: true,
			});
		}
	}, [isLogged]);

	const data = { isLogged, onLogin, onLogout };

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

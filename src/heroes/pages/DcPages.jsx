import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { HeroeList } from '../components/HeroeList';

export const DcPages = () => {
	const { isLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	// console.log(`log: ${isLogged}`);

	// useEffect(() => {
	// 	if (!isLogged) {
	// 		navigate('/login', {
	// 			replace: true,
	// 		});
	// 	}
	// }, []);

	return (
		<div className="container mx-auto">
			<HeroeList publisher="DC Comics" />
		</div>
	);
};

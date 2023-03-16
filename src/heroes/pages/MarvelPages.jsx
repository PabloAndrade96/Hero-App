import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { HeroeList } from '../components/HeroeList';

export const MarvelPages = () => {
	const { isLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	/* useEffect(() => {
		if (!isLogged) {
			navigate('/login', {
				replace: true,
			});
		}
	}, []); */

	return (
		<div className="container mx-auto">
			<HeroeList publisher="Marvel Comics" />
		</div>
	);
};

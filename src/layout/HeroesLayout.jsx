import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../auth/context/AuthProvider';
import { Navbar } from '../ui/components/Navbar';

export const HeroesLayout = () => {
	return (
		<>
			<AuthProvider>
				<Navbar />
				<Outlet />
			</AuthProvider>
		</>
	);
};

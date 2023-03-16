import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../auth/pages/LoginPage';
import { DcPages, HeroPage, MarvelPages, SearchHeroes } from '../heroes/pages';
import { HeroesLayout } from '../layout/HeroesLayout';

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <HeroesLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="/marvel" />,
			},
			{
				index: true,
				path: '/marvel',
				element: <MarvelPages />,
			},
			{
				path: '/dc',
				element: <DcPages />,
			},
			{
				path: 'hero/:id',
				element: <HeroPage />,
			},
			{
				path: '/search',
				element: <SearchHeroes />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
		],
	},
]);

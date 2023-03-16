import { useContext, useEffect, useState } from 'react';

import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { AuthContext } from '../../auth/context/AuthContext';

import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { LoaderSkeleton } from '../helpers/loaderSkeleton';

export const SearchHeroes = () => {
	const { isLogged } = useContext(AuthContext);

	const navigate = useNavigate();

	const { loading } = LoaderSkeleton();

	// useEffect(() => {
	// 	if (!isLogged) {
	// 		navigate('/login', {
	// 			replace: true,
	// 		});
	// 	}
	// }, []);

	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const heroes = getHeroesByName(q);

	const { search, onInputChange } = useForm({
		search: q,
	});

	const onSearchSubmit = (e) => {
		e.preventDefault();

		// if (search.trim().length <= 0) return;

		navigate(`?q=${search}`);
	};

	const onReset = () => {
		console.log('borrado');
	};

	return loading ? (
		<div className="container mx-auto my-5">
			<SkeletonTheme baseColor="#d1cdcd" highlightColor="#f6f6f6" duration={0.5}>
				<Skeleton className="w-full h-[72px]" />
			</SkeletonTheme>
		</div>
	) : (
		<div className="container mx-auto my-5">
			<form
				className="relative animate__animated animate__fadeIn"
				onSubmit={onSearchSubmit}
			>
				<input
					type="text"
					autoComplete="off"
					placeholder="Buscar heroe..."
					name="search"
					value={search}
					onChange={onInputChange}
					className="w-full text-white text-2xl bg-slate-300 outline-none p-5 placeholder:text-white placeholder:text-2xl"
				/>
				<div
					className="absolute cursor-pointer top-0 right-0 h-full p-5 text-white"
					onClick={onReset}
				>
					X
				</div>
			</form>
			{q !== '' && heroes.length >= 1 ? (
				<div className="grid grid-cols-12 gap-5 mt-5">
					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			) : (
				q !== '' && heroes.length === 0 && <span>No hay heroes</span>
			)}
		</div>
	);
};

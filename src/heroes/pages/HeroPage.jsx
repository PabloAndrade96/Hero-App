import { useContext, useEffect, useMemo, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { Breadcrumb } from '../components/Breadcrumb';

import { getHeroById } from '../helpers/getHeroById';
import { LoaderSkeleton } from '../helpers/loaderSkeleton';

const CharactersByHero = ({ alter_ego, characters }) => {
	return (
		alter_ego !== characters && (
			<li className="mb-4">
				<b>Personajes:</b> {characters}
			</li>
		)
	);
};

export const HeroPage = () => {
	const { isLogged } = useContext(AuthContext);
	const { id } = useParams();

	const navigate = useNavigate();

	const hero = useMemo(() => getHeroById(id), [id]);

	const onNavigate = () => navigate('/');

	const { loading } = LoaderSkeleton();

	if (!hero) {
		return <Navigate to="/marvel" />;
	}

	// useEffect(() => {
	// 	if (!isLogged) {
	// 		navigate('/login', {
	// 			replace: true,
	// 		});
	// 	}
	// }, []);

	const { alter_ego, characters, first_appearance, publisher, superhero } = hero;

	return loading ? (
		<div className="container mx-auto flex gap-10 my-5">
			<SkeletonTheme baseColor="#d1cdcd" highlightColor="#f6f6f6" duration={0.5}>
				<Skeleton className="rounded-lg min-w-[300px] min-h-[480px]" />
				<div>
					<Skeleton className="w-[250px] h-[30px] rounded-lg mb-5" />
					<ul>
						<Skeleton className="mb-4 h-[24px] w-[200px] rounded-lg" />
						<Skeleton className="mb-4 h-[24px] w-[300px] rounded-lg" />
						<Skeleton className="mb-4 h-[24px] w-[190px] rounded-lg" />
					</ul>
					<Skeleton className="h-[40px] w-[75px] rounded-lg" />
				</div>
			</SkeletonTheme>
		</div>
	) : (
		<>
			<Breadcrumb />
			<div className="container mx-auto flex gap-10 my-5 animate__animated animate__fadeIn">
				<div className="rounded-lg overflow-hidden max-w-[300px]">
					<img
						className="h-full w-full object-cover"
						src={`../assets/heroes/${id}.jpg`}
						alt={superhero}
					/>
				</div>
				<div>
					<h1 className="text-2xl font-bold mb-5">{superhero}</h1>
					<ul>
						<li className="mb-4">
							<b>Personaje:</b> {alter_ego}
						</li>
						<li className="mb-4">
							<b>Primera aparición:</b> {first_appearance}
						</li>
						<CharactersByHero alter_ego={alter_ego} characters={characters} />
						<li className="mb-4">
							<b>Editora:</b> {publisher}
						</li>
					</ul>
					<button
						className="bg-cyan-500 text-white rounded px-4 py-2 hover:bg-cyan-600"
						onClick={onNavigate}
					>
						Volver
					</button>
				</div>
			</div>
		</>
	);
};

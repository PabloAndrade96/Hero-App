import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'animate.css';
import { LoaderSkeleton } from '../helpers/loaderSkeleton';

export const HeroCard = ({
	superhero,
	id,
	alter_ego,
	publisher,
	first_appearance,
}) => {
	const { loading } = LoaderSkeleton();

	return loading ? (
		<div className="col-span-12 sm:col-span-6 lg:col-span-2">
			<SkeletonTheme baseColor="#d1cdcd" highlightColor="#f6f6f6" duration={0.5}>
				<Skeleton className="rounded-lg h-[360px] w-full" />
			</SkeletonTheme>
		</div>
	) : (
		<div className="col-span-12 sm:col-span-6 lg:col-span-2 animate__animated animate__fadeIn">
			<Link to={`/hero/${id}`}>
				<div className="relative rounded-lg overflow-hidden">
					<img
						className="h-full w-full object-cover"
						src={`/assets/heroes/${id}.jpg`}
						alt={superhero}
					/>
					<div className="absolute flex flex-col inset-0 w-full h-full overlay p-4">
						<h1 className="font-bold text-white text-xl">{superhero}</h1>
						<small className="text-sm text-slate-200">{alter_ego}</small>

						<h2 className="font-bold text-white mt-auto">{publisher}</h2>
						<p className="text-sm text-slate-200 mb-5">
							Primera aparición: <br /> {first_appearance}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

import { useMemo } from 'react';
import { getPublisherById } from '../helpers/getPublisherById';
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {
	const heroes = useMemo(() => getPublisherById(publisher), [publisher]);

	return (
		<div className="grid grid-cols-12 gap-5 py-5">
			{heroes.map((heroe) => (
				<HeroCard key={heroe.id} {...heroe} />
			))}
		</div>
	);
};

import { Link } from 'react-router-dom';

export const SearchResults = ({ heroes, onClickHeroe }) => {
	return (
		<div className="search-result-popup absolute z-30 mt-2 max-h-52 w-72 overflow-y-auto rounded bg-white p-3 shadow-lg">
			{heroes.map(({ id, superhero }) => (
				<Link
					to={`/hero/${id}`}
					className="flex gap-2 p-2 hover:bg-slate-100"
					key={id}
					onClick={onClickHeroe}
				>
					<figure className="h-12 w-12 overflow-hidden rounded border bg-white">
						<img src={`/assets/heroes/${id}.jpg`} alt={superhero} />
					</figure>
					<b className="text-lg">{superhero}</b>
				</Link>
			))}
		</div>
	);
};

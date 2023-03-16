import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { getHeroesByName } from '../../heroes/helpers/getHeroesByName';
import { Search } from './Search';
import { SearchResults } from './SearchResults';

export const Navbar = () => {
	const { isLogged, onLogout } = useContext(AuthContext);

	const [name, setName] = useState('');

	const heroes = getHeroesByName(name);

	window.addEventListener(
		'click',
		({ target }) => !target.closest('.search-result-popup') && setName('')
	);

	const onChangeInput = ({ target }) => setName(target.value);
	const onClickHeroe = () => setWords('');

	if (!isLogged) return;

	return (
		<div className="py-5 px-10 bg-slate-800 flex items-center gap-20">
			<Link to="/" className="font-bold text-cyan-500 text-2xl">
				<img src="/assets/logo.png" alt="logo" className="h-10" />
			</Link>
			<ul className="flex flex-auto items-center gap-5 text-slate-200">
				<li>
					<NavLink
						to="/marvel"
						className={({ isActive }) => `${isActive && 'active'}`}
					>
						<img src="/assets/marvel-logo.png" alt="marvel" />
					</NavLink>
				</li>
				<li>
					<NavLink to="/dc" className={({ isActive }) => `${isActive && 'active'}`}>
						<img src="/assets/dc-logo.png" alt="dc" />
					</NavLink>
				</li>
			</ul>
			<div className="relative">
				<Search name={name} onChangeInput={onChangeInput} />
				{!heroes.length <= 0 && (
					<SearchResults heroes={heroes} onClickHeroe={onClickHeroe} />
				)}
			</div>
			<div className="ml-auto">
				<span className="text-slate-200 mr-5">Hola Usuario!</span>
				<button
					className="py-2 px-4 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600"
					onClick={onLogout}
				>
					Cerrar sesión
				</button>
			</div>
		</div>
	);
};

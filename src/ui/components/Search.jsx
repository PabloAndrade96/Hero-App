export const Search = ({ name, onChangeInput }) => {
	return (
		<form
			className="relative flex items-center text-slate-200"
			onSubmit={(e) => e.preventDefault()}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="absolute pointer-events-none ml-3 h-6 w-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>

			<input
				type="search"
				placeholder="Buscar heroe..."
				value={name}
				onChange={onChangeInput}
				className="w-52 rounded-full border border-slate-300 bg-transparent p-2 pl-11 outline-none transition-all duration-300 placeholder:text-slate-200 focus:border-cyan-500 focus:ring-0"
			/>
		</form>
	);
};

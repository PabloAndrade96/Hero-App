import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import useFetch from '../hooks/useFetch';

const LoginPage = () => {
	const { isLogged, onLogin } = useContext(AuthContext);
	const [errorForm, setErrorForm] = useState(false);

	const { users } = useFetch('/auth/users.json');

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (isLogged) {
			navigate('/', {
				replace: true,
			});
		}
	}, [isLogged]);

	const onSubmitLogin = ({ name, password }) => {
		users.map((user) => {
			if (name !== user.name && password !== user.password) {
				setErrorForm(true);
				return;
			}
			return onLogin();
		});
	};

	return (
		<div className="w-full h-screen flex items-center justify-center bg-gray-800">
			<form
				className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex gap-4 flex-col"
				onSubmit={handleSubmit(onSubmitLogin)}
			>
				<label className="font-light text-4xl text-center mb-4">Login</label>
				<input
					type="text"
					className={`w-full h-12 rounded-lg px-4 text-lg outline-none border-2 ${
						!errors.name ? 'focus:border-cyan-500' : 'focus:border-red-500'
					}`}
					placeholder="User name"
					name="name"
					{...register('name', {
						required: true,
					})}
				/>
				<input
					type="password"
					className={`w-full h-12 rounded-lg px-4 text-lg outline-none border-2 ${
						!errors.password ? 'focus:border-cyan-500' : 'focus:border-red-500'
					}`}
					placeholder="Password"
					name="password"
					{...register('password', {
						required: true,
					})}
				/>
				<button className="w-full h-12 rounded-lg bg-cyan-500 uppercase font-semibold hover:bg-cyan-600 text-gray-100 transition">
					Login
				</button>
				<p className="text-center text-green-500">
					usuario: admin | pass: 1asd48aw212
				</p>
				{(errors.name?.type === 'required' ||
					errors.password?.type === 'required') && (
					<small className="text-red-500 text-center">
						Asegurese de que ningún campo este vacío
					</small>
				)}
				{errorForm && (
					<small className="text-red-500 text-center">
						El usuario o contraseña ingresado son incorrectos
					</small>
				)}
			</form>
		</div>
	);
};

export default LoginPage;

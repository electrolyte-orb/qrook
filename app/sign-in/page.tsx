'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Loader, Main } from '../components';
const isProd = process.env.NODE_ENV === 'production';

export default function SignIn() {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();
	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session !== null) {
				setLoggedIn(true);
			}
			if (data.session === null) {
				setLoggedIn(false);
			}
			setLoading(false);
		});
	});
	useEffect(() => {
		const subscription = supabase.auth.onAuthStateChange((e) => {
			if (e === 'SIGNED_IN') {
				setLoggedIn(true);
			}
			if (e === 'SIGNED_OUT') {
				setLoggedIn(false);
			}
			console.log(e);
			setLoading(false);
		});

		return () => {
			subscription.data.subscription.unsubscribe();
		};
	}, []);

	async function signInWithGoogle() {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `http${isProd ? 's' : ''}://${
					window.location.host
				}/sign-in`,
			},
		});
	}

	async function signOut() {
		await supabase.auth.signOut();
		setLoading(true);
		router.refresh();
	}

	return (
		<Main>
			<h1 className="font-bold text-4xl text-black">Authentication</h1>
			<button
				onClick={() => {
					signInWithGoogle();
				}}
				className="inline-block text-sm mt-8 px-4 py-2 rounded shadow-md bg-emerald-500 focus:ring-4 focus:ring-emerald-100 transition text-white"
			>
				Google Account {'->'}
			</button>
			{loading && <Loader />}
			{loggedIn && (
				<p>
					<b>
						Already logged in!{' '}
						<button onClick={() => signOut()}>Sign Out?</button>
					</b>
				</p>
			)}
		</Main>
	);
}

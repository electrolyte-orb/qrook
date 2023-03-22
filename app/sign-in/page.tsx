'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const isProd = process.env.NODE_ENV === 'production';

export default function SignIn() {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const router = useRouter();

	isLoggedIn().then(setLoggedIn);

	async function isLoggedIn() {
		let {
			data: { user },
		} = await supabase.auth.getUser();
		return user?.role === 'authenticated';
	}

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
		router.refresh();
	}

	return (
		<main className="p-4 lg:p-8">
			<h1>Sign In using Google.</h1>
			<button
				onClick={() => {
					signInWithGoogle();
				}}
			>
				Google Sign in {'->'}
			</button>
			{loggedIn && (
				<p>
					<b>
						Already logged in!{' '}
						<button onClick={() => signOut()}>Sign Out?</button>
					</b>
				</p>
			)}
		</main>
	);
}

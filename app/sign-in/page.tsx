'use client';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useState } from 'react';
const isProd = process.env.NODE_ENV === 'production';
export default function SignIn() {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
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
				redirectTo: `http${isProd && 's'}://${window.location.host}/sign-in`,
			},
		});
	}

	return (
		<div>
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
						Already logged in! <Link href="/">Account Settings {'->'}</Link>
					</b>
				</p>
			)}
		</div>
	);
}

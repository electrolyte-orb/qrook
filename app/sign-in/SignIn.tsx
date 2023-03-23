'use client';

import { useEffect, useState, useRef } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const isProd = process.env.NODE_ENV === 'production';

export default function SignIn({
	serverSession,
}: {
	serverSession: Session | null;
}) {
	const [session, setSession] = useState<Session | null>(serverSession);
	const router = useRouter();
	const errorRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const unsubscribe = supabase.auth.onAuthStateChange((e, session) => {
			setSession(session);
		});

		return unsubscribe.data.subscription.unsubscribe;
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
		const { error } = await supabase.auth.signOut();
		if (error !== null) router.refresh();
		if (error) {
			errorRef.current!.innerHTML = `${error.message}`;
		}
	}

	return session ? (
		<>
			<span ref={errorRef}></span>
			<div className="bg-white rounded-full shadow-2xl border border-neutral-300 w-fit p-2 my-4 mx-auto">
				<Image
					alt="User Avatar"
					src={session.user.user_metadata.avatar_url}
					width={96}
					height={96}
					className="rounded-full inline-block"
				/>
			</div>
			<br />
			<h3 className="text-emerald-600 bg-emerald-100 px-2 inline-block text-lg font-medium capitalize rounded">
				{session.user.role}
			</h3>
			<p className="text-sm mt-4 font-medium">
				Hello, {session.user.user_metadata.full_name}
			</p>
			<p className="text-sm font-medium">Email: {session.user.email}</p>
			<button
				onClick={() => signOut()}
				className="inline-block text-sm mt-4 px-4 py-2 rounded shadow-md bg-neutral-800 focus:ring-4 focus:ring-neutral-300 transition text-white"
			>
				Sign Out
			</button>
		</>
	) : (
		<>
			<button
				onClick={() => signInWithGoogle()}
				className="inline-block text-sm mt-8 px-4 py-2 rounded shadow-md bg-emerald-500 focus:ring-4 focus:ring-emerald-200 transition text-white"
			>
				Google Account {'->'}
			</button>
		</>
	);
}

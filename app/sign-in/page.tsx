import { createClient } from '@/lib/supabase-server';
import SignIn from './SignIn';
import { Suspense } from 'react';
import { Loader } from '../components';

export const revalidate = 0;

export default async function Page() {
	const supabase = createClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<>
			<h1 className="font-bold text-4xl text-black tracking-tight">
				Authentication
			</h1>
			<Suspense fallback={<Loader />}>
				<SignIn serverSession={session} />
			</Suspense>
		</>
	);
}

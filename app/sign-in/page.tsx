import { createClient, supabase } from '@/lib/supabase-server';
import SignIn from './SignIn';

export default async function Page() {
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return <SignIn serverSession={session} />;
}

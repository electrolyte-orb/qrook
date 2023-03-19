import { createClient } from '@/lib/supabase-server';
export const revalidate = 0;

export default async function Home() {
	const supabase = createClient();
	const { data } = await supabase.from('chats').select();
	let user = (await supabase.auth.getUser()).data;
	return (
		<main>
			<p>Sign in to continue.</p>
			<h1>Hello world</h1>
			<pre>
				{JSON.stringify(data, null, 2)}
				<br />
				{JSON.stringify(user.user, null, 2)}
			</pre>
		</main>
	);
}

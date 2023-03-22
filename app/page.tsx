import { createClient } from '@/lib/supabase-server';
export const revalidate = 0;

export default async function Home() {
	const supabase = createClient();
	const user = await supabase.auth.getUser();

	return (
		<main className="p-4 lg:p-8">
			<h1 className="text-black text-4xl font-bold tracking-tight">
				Kindly Sign In
			</h1>
			<section className="mt-4">
				<h3>Diagnostic User Info</h3>
				<details>
					<summary>
						<code>{user.data.user?.email}</code>
					</summary>
					<pre style={{ overflow: 'clip' }}>
						<code>{JSON.stringify(user.data.user, null, 2)}</code>
					</pre>
				</details>
			</section>
		</main>
	);
}

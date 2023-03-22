import { createClient } from '@/lib/supabase-server';
import { Main } from './components';
export const revalidate = 0;

export default async function Home() {
	const supabase = createClient();
	const { data } = await supabase.auth.getSession();

	return (
		<Main>
			<h1 className="text-black text-4xl font-bold tracking-tight">
				Kindly Sign In
			</h1>
			<section className="mt-4">
				<h3>Diagnostic User Info</h3>
				<details>
					<summary>
						<code>{data.session?.user?.email}</code>
					</summary>
					<pre className="overflow-scroll hover:ring-4">
						<code>{JSON.stringify(data.session?.user, null, 2)}</code>
					</pre>
				</details>
			</section>
		</Main>
	);
}

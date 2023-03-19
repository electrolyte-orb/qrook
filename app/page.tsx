import { createClient } from '@/lib/supabase-server';
export const revalidate = 0;

export default async function Home() {
	const supabase = createClient();
	const { data } = await supabase.from('chats').select();
	const user = await supabase.auth.getUser();
	return (
		<main>
			<p>Sign in to continue.</p>
			<h1>Hello world</h1>
			<table border={1}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Sender</th>
						<th>Reciever</th>
						<th>Message</th>
					</tr>
				</thead>
				<tbody>
					{data?.map(({ id, sender, reciever, message }, index) => (
						<tr key={index}>
							<td>{id}</td>
							<td>{sender}</td>
							<td>{reciever}</td>
							<td>{message}</td>
						</tr>
					))}
				</tbody>
			</table>

			<h3>Diagnostic User Info</h3>
			<details>
				<summary>
					<code>{user.data.user?.email}</code>
				</summary>
				<p style={{ overflow: 'clip' }}>
					<code>{JSON.stringify(user.data.user, null, 2)}</code>
				</p>
			</details>
		</main>
	);
}

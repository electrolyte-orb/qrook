import Link from 'next/link';

export default function Navbar() {
	return (
		<div className="w-full flex justify-between items-center p-4 lg:px-8 bg-neutral-800 text-neutral-400 border-b-2 border-neutral-500">
			<Link href="/">
				<h1 className="font-bold text-white">
					<span className="inline-block w-4 h-1 bg-emerald-500 rounded-full mr-2 relative">
						<span className="inline-block w-2 h-1 bg-emerald-500 rounded-full absolute -top-2"></span>
						<span className="inline-block w-1 h-1 bg-emerald-500 rounded-full absolute -top-2 right-0"></span>
					</span>
					Qrook
				</h1>
			</Link>
			<Link
				href="/sign-in"
				className="text-xs hover:text-white focus:ring-4 focus:ring-blue-500"
				style={{ fontFeatureSettings: '"ss02"' }}
			>
				Sign In
			</Link>
		</div>
	);
}

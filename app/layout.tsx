import { Navbar } from './components';
import './global.css';

export const metadata = {
	title: 'Qrook',
	description: 'Intract.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="leading-normal tracking-wide text-neutral-600">
			<head>
				<link rel="preconnect" href="https://rsms.me/" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</head>
			<body className="bg-neutral-100">
				<Navbar />
				{children}
			</body>
		</html>
	);
}

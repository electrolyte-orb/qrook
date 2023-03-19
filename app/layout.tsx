import { Inter } from 'next/font/google';
import { Navbar } from './components';
import './global.css';
const inter = Inter({ subsets: ['latin'] });

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
		<html lang="en" className={inter.className}>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

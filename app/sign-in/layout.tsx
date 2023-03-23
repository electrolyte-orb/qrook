import { Main } from '../components';
export const metadata = {
	title: 'Authentication',
	description: '',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <Main>{children}</Main>;
}

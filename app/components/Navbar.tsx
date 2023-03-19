import styles from './Navbar.module.css';
import Link from 'next/link';
export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<Link href="/">
				<h1>Qrook</h1>
			</Link>
			<Link href="/sign-in">
				<button className={styles.button}>Sign In</button>
			</Link>
		</div>
	);
}

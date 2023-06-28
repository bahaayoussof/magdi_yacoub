import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<div className={styles.main}>
				<Sidebar />
				<main className={styles.mainContainer}>Hello Next world!</main>
			</div>
		</>
	);
}

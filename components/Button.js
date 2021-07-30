import styles from '../styles/Button.module.scss'

export default function Button({filterMovies}) {
	return (
		<button onClick={filterMovies} className={styles.btn}>search</button>
	)
}
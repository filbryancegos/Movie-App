import Link from 'next/link'
import styles from '../../styles/Card.module.scss'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Loader from '../../components/Loader'

function Card({movies, loading}) {
	const getPercentage = (num) => {
		return (Math.round(num / 200 * 2))
	}

	return (
		<>
			{
				movies && movies.map(movie => 
					<div key={movie.id} className={styles.card}>
						<Link href={`/movies/${movie.id}`}>
							<a>
								<div className={styles.imageWrap}>
									<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""/>
									<div className={styles.imageLoader}>
										<Loader />
									</div>
								</div>
								
							</a>
						</Link>
						
						<div className={styles.percentage}>
							<CircularProgressbar
							value={Math.round(movie.popularity /200 * 2)}
							text={`${getPercentage(movie.popularity)} %`}
							background={true}
							styles={buildStyles({
								textSize: '30px',
								strokeLinecap: "butt",
								pathColor: '#87cca5',
								textColor: '#fff',
								trailColor: '#082541',
								backgroundColor: '#000',
							})} 
							/>
						</div>
						<div className="p-4">
							<Link href={`/movies/${movie.id}`}>
								<a>
									<h3>{movie.original_title}</h3>
								</a>
							</Link>
							<p>{movie.release_date}</p>
						</div>
					</div>
					
				)
			}
		</>
	)
}

export default Card




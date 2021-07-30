import Head from 'next/head'
import React, { useState, useEffect} from 'react'
import Card from '../components/Movies/Card'
import styles from '../styles/Card.module.scss'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'
import Loader from '../components/Loader'

function Movies() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedQuery, setSelectedQuery] = useState(null);
	const toggling = () => setIsOpen(!isOpen);
	const options = [
		{name: 'Popular', query: 'popular'},
		{name: 'Now Paying', query: 'now_playing'},
		{name: 'Upcoming', query: 'upcoming'},
		{name: 'Top Rated', query: 'top_rated'}
	];

	const APP_KEY = '024a419efaa3f8862e57d7434e765ffa';
	const [movies, setMovies] = useState([])
	const [filter, setFilter] = useState('popular')
	const [loading, setLoading] = useState(false)

	const onOptionClicked = value => () => {
		setSelectedOption(value.name);
		setSelectedQuery(value.query);
		setIsOpen(false);
	};

	useEffect(() => {
		fetchMovies();
	}, [filter])

	const fetchMovies = async () => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=${APP_KEY}&language=en-US&page=1`);
		const data = await response.json();
		const results = data.results;
		setMovies(results)
		setLoading(true)
		console.log(results);
	}

	const filterMovies = () => {
		setFilter(selectedQuery)
	}

  return (
    <>
      <h1>Popular Movies</h1>
	  <div className="grid grid-cols-1 sm:grid-cols-4 mt-6 gap-y-6 gap-x-0 sm:gap-y-0 sm:gap-x-6">
		<div className="col-span-1">
			<Dropdown 
			onOptionClicked={onOptionClicked} 
			isOpen={isOpen} 
			selectedOption={selectedOption} 
			toggling={toggling} 
			options={options}  />
			<Button filterMovies={filterMovies} />
		</div>
		<div className="col-span-3">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
				{ loading ? <Card movies={movies}  /> : <Loader/> }
			</div>
		</div>
	  </div>
    </>
  )
}


export default Movies;
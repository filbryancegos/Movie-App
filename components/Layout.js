import React from 'react'
import Meta from './Meta'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'

function Layout ({children}) {
	return (
		<>
			<Meta />
			<Nav />
			<main id="main" className={styles.maincontent}>
				<div className="container m-auto pt-12">
					{children}
				</div>
			</main>
		</>
	)
}

export default Layout;
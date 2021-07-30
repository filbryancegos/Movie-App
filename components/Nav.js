import React from 'react'
import styles from '../styles/Nav.module.scss'
import Image from 'next/image'
import ActiveLink from './ActiveLink'


function Nav(params) {
	return (
		<header className={styles.headerbg}>
			<div className="container m-auto flex items-center justify-between">
				<div className={styles.companylogo}>
					<img src="/logo.svg"  alt=""/>
				</div>
				<div>
					<ul className={styles.navitem}>
						<li><ActiveLink href='/movies'>Movie</ActiveLink></li>
						<li><ActiveLink href='/tv'>TV Shows</ActiveLink></li>
						<li><ActiveLink href='/people'>People</ActiveLink></li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Nav

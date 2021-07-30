import { useRouter } from 'next/router'

function ActiveLink({ children, href, mobile }) {
	const router = useRouter()

	const handleClick = (e) => {
		e.preventDefault()
		console.log(href)
		console.log(router.asPath)

		console.log(router)

	
		router.push(href)
 	 }

  return (
    <a href={href} onClick={handleClick} className={`nav-link ${router.asPath === href ? 'current' : ''}` }>
      {children}
    </a>
  )
}

export default ActiveLink
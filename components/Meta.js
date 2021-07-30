import Head from 'next/head'

function Meta ({title, keywords, description}) {
	return (
		<Head>
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta name='keywords' content={keywords} />
		<meta name='description' content={description} />
		<meta charSet='utf-8' />
		<link rel='icon' href='/favicon.ico' />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"></link>
		<title>{title}</title>
	  </Head>
	)
}

Meta.defaultProps = {
	title: 'Movie App',
	keywords: 'web development, programming',
	description: 'Get the latest news in web dev',
}

export default Meta;
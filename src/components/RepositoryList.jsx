import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

// https://api.github.com/users/GilbertoASJ/repos

const repository = {
	name: 'unform',
	description: 'Forms in React',
	link: 'https://github.com'
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState([])

	// useEffect recebe dois parâmetros, a função que irá executar, e quando executar essa função
	useEffect(() => {
		fetch('https://api.github.com/users/GilbertoASJ/repos')
		 .then(response => response.json())
		 .then(data => setRepositories(data))

	}, [])

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
			</ul>
		</section>
	)
}
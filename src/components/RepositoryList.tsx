import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

// https://api.github.com/users/GilbertoASJ/repos

interface Repository {
	name: String,
	description: String,
	html_url: String,
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState<Repository[]>([])

	// useEffect recebe dois parâmetros, a função que irá executar, e quando executar essa função
	useEffect(() => {
		fetch('https://api.github.com/users/GilbertoASJ/repos')
		 .then(response => response.json())
		 .then(data => setRepositories(data))

	}, [])

	return (
		<section className="repository-list">
			<h1>Github Locator
				<p>Lista de repositórios</p>
			</h1>


			<ul>
				{repositories.map(repository => {
					return <RepositoryItem key={repository.name} repository={repository} />
				})}
				
			</ul>
		</section>
	)
}
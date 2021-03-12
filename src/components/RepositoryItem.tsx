// Tipando o props do RepositoryItem, para que receba propriedades explícitas citadas aqui
interface RepositoryItemProps {
	repository: {
		name: String,
		description: String,
		html_url: String,
	}
} 

export function RepositoryItem(props: RepositoryItemProps) {
	return (
		<li>
			<strong>{props.repository.name}</strong>

			<p>{props.repository.description}</p>
			<p></p>
			<a href={props.repository.html_url}>Acessar repositório</a>
		</li>
	)
}
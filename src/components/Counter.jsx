// Arquivo auxiliar sobre imutabilidade

// Importando useState, função do react que permite utilizar o conceito de estado
import { useState } from 'react'

// O conceito da imutabilidade em React, consiste em não sobrepor variáveis, não sobrescrever seus valores, e sim criar uma nova variável e atribuir o valor da antiga por exemplo:

/*

let usuarios = ['Gilberto', 'Júnior', 'Scy']

No javascript condicional seria normal fazer: usuarios.push('newUser'), porém no React, com o conceito da imutabilidade, o mais convecional a se fazer é:

let novoUsuarios = [...usuarios, 'newUser']

Fazendo isso ao invés de sobrescrever a antiga variável, criamos uma nova atribuindo seu antigo valor, adicionando um novo valor.

*/

export function Counter() {
	const [counter, setCounter] = useState(0);

	function increment() {
		setCounter(counter + 1)
	}

	return (
		<div>
			<h2>{counter}</h2>
			<button type="button" onClick={increment}>Increment +1</button>
		</div>
	)
}
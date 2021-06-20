const nomes = ["Carmo", "Lamarana", "Omar", "Ludmila", "Júlio", "Amelia", "Violeta", "Liedson", "Anthony", "Noa"];
const outrosNomes = ["Veiga", "Reis", "Lacerda", "Borba", "Oliveira", "Santarém", "Catela", "Tomé", "Lousã", "Santiago"];
/*

// Não estava funcionando :/

function gerarFuncionario() {
	let id = Math.random();
	id = Math.round(id * 1000);

	let nome = nomes[Math.round(Math.random * 100) % 10] + " " + outrosNomes[Math.round(Math.random * 100) % 10];
	Math.random()
	
	let idade = Math.round(Math.random * 100)%60 +18;
	let salario = Math.round(Math.random * 10000) / 100;

	let funcionario = { id, nome, idade, salario };
	console.log(funcionario);

	return funcionario;
}
*/

function gerarFuncionarios() {
	let funcionarios = [];
	let id, idade, salario;

	for (let index = 0; index < 10; index++) {
		id = Math.random();
		id = Math.round(id * 100000);
		idade = (id % 60) + 18;
		salario = (id * idade) / 100;

		funcionarios.push({ id, nome: nomes[index] + " " + outrosNomes[index], idade, salario });
	}
	return funcionarios;
}
const funcionarios = gerarFuncionarios();

export default funcionarios;

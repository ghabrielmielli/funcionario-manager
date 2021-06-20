import React from "react";
import "./App.css";
import Container from "./components/Container";
import Titulo from "./components/Titulo";
import funcionarios from "./funcionariosMock";
import ListaFuncionarios from "./components/ListaFuncionarios";
import FuncionarioForm from "./components/FuncionarioForm";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			funcionarios: funcionarios,
			editFuncionario: { id: "", nome: "", idade: "", salario: "" },
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.limparForm = this.limparForm.bind(this);
		this.deletarFuncionario = this.deletarFuncionario.bind(this);
		this.editarFuncionario = this.editarFuncionario.bind(this);
	}

	//Funções para Form
	handleInputChange(event) {
		const target = event.target;

		const value = target.value;
		const name = target.name;

		this.setState((prevState) => {
			let funcionario = prevState.editFuncionario;
			funcionario[name] = value;
			return { editFuncionario: funcionario };
		});
	}

	handleSubmit(novoFuncionario) {
		if (this.state.editFuncionario.id) {
			console.log("voce editou um funcionario");

			let funcionario = this.state.funcionarios.find((func) => func.id === novoFuncionario.id);
			if (!funcionario) {
				this.limparForm();
				throw new Error("Epa! Parece que esse funcionário não existe mais!");
			}
			Object.assign(funcionario, novoFuncionario);
		} else {
			console.log("voce cadastrou um funcionario");

			let id = Math.random();
			id = Math.round(id * 100000);
			novoFuncionario.id = id;

			this.setState({ funcionarios: [novoFuncionario, ...this.state.funcionarios] });
		}

		this.limparForm();
	}

	limparForm(event) {
		this.setState({ editFuncionario: { id: "", nome: "", idade: "", salario: "" } });
	}

	//Funções para lista
	deletarFuncionario(funcionarioID) {
		this.setState((prevState) => {
			let novaLista = prevState.funcionarios.filter((func) => func.id !== funcionarioID);
			return { funcionarios: novaLista };
		});
	}

	editarFuncionario(funcionarioID) {
		let funcionario = this.state.funcionarios.find((func) => func.id === funcionarioID);
		console.log(funcionario);
		this.setState({ editFuncionario: Object.assign({}, funcionario) });
	}

	render() {
		return (
			<div className="App">
				<Titulo nome="Funcionário Manager" descricao="Uma ferramenta para gestão de funcionários" centralizado="true"></Titulo>
				<Container>
					<Titulo nome={this.state.editFuncionario.id ? `Editando funcionário ${this.state.editFuncionario.id}` : "Cadastrar Funcionário"}></Titulo>
					<FuncionarioForm funcionario={this.state.editFuncionario} handleChange={this.handleInputChange} salvar={this.handleSubmit} limparForm={this.limparForm}></FuncionarioForm>
				</Container>
				<Container>
					<Titulo nome="Lista de Funcionários"></Titulo>
					<ListaFuncionarios funcionarios={this.state.funcionarios} deletarFuncionario={this.deletarFuncionario} editarFuncionario={this.editarFuncionario} />
				</Container>
			</div>
		);
	}
}

export default App;

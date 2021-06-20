import React from "react";
import "./FuncionarioForm.css";

class FuncionarioForm extends React.Component {
	constructor(props) {
		super(props);

		this.prepararParaSalvar = this.prepararParaSalvar.bind(this);
		this.capitalizar = this.capitalizar.bind(this);
	}

	prepararParaSalvar(e) {
		e.preventDefault();

		try {
			let funcionario = Object.assign({}, this.props.funcionario);
			let nome = funcionario.nome;
			let idade = Number.parseInt(funcionario.idade);
			let salario = funcionario.salario;

			if (nome.length < 2 || !isNaN(nome)) throw new Error("Nome inválido");
			nome = this.capitalizar(nome);

			if (!isNaN(idade)) idade = idade >= 18 ? idade : 18;
			else throw new Error("Idade inválida");

			if (!salario) throw new Error("Salário inválido");

			funcionario.nome = nome;
			funcionario.idade = idade;
			this.props.salvar(funcionario);
		} catch (e) {
			window.alert(e.message);
		}
	}

	capitalizar(text) {
		var words = text.toLowerCase().split(" ");
		for (var a = 0; a < words.length; a++) {
			var w = words[a];
			words[a] = w[0].toUpperCase() + w.slice(1);
		}
		return words.join(" ");
	}

	render() {
		let funcionario = this.props.funcionario;

		return (
			<form onSubmit={this.prepararParaSalvar}>
				<label>
					Nome:
					<input name="nome" type="text" placeholder="Fulano da Silva" value={funcionario.nome} onChange={this.props.handleChange} />
				</label>

				<label>
					Idade:
					<input name="idade" type="text" placeholder="26" value={funcionario.idade} onChange={this.props.handleChange} />
				</label>

				<label>
					Salário:
					<input name="salario" type="number" placeholder="7500,00" value={funcionario.salario} onChange={this.props.handleChange} />
				</label>

				<input className="btn-cancelar" type="button" value="Cancelar" onClick={this.props.limparForm} />
				<input className="btn-salvar" type="submit" value="Salvar" />
			</form>
		);
	}
}
export default FuncionarioForm;

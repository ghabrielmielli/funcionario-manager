import React from "react";
import "./ListaFuncionarios.css";

class ListaFuncionarios extends React.Component {
	constructor(props) {
		super(props);
		this.editarFuncionario = this.editarFuncionario.bind(this);
		this.excluirFuncionario = this.excluirFuncionario.bind(this);
	}
	editarFuncionario(e) {
		let funcionarioID = e.target.getAttribute("data-item");
		funcionarioID = Number.parseInt(funcionarioID);
		this.props.editarFuncionario(funcionarioID);
	}

	excluirFuncionario(e) {
		let funcionarioID = e.target.getAttribute("data-item");
		funcionarioID = Number.parseInt(funcionarioID);
		this.props.deletarFuncionario(funcionarioID);
	}

	render() {
		let funcionarios = this.props.funcionarios;

		let funcionarioRows = funcionarios.map((func) => (
			<tr key={func.id}>
				<td>{func.id}</td>
				<td>{func.nome}</td>
				<td>{func.idade}</td>
				<td>{func.salario}</td>
				<td>
					<table>
						<tbody>
							<tr className="options">
								<td>
									<button className="btn" data-item={func.id} onClick={this.editarFuncionario}>
										<i className="fa fa-pencil" data-item={func.id} onClick={this.editarFuncionario}></i>
									</button>
								</td>
								<td>
									<button className="btn" data-item={func.id} onClick={this.excluirFuncionario}>
										<i className="fa fa-trash" data-item={func.id} onClick={this.excluirFuncionario}></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		));

		return (
			<table>
				<thead>
					<tr>
						<th>Código</th>
						<th>Nome</th>
						<th>Idade</th>
						<th>Salário</th>
						<th></th>
					</tr>
				</thead>
				<tbody className="lista">{funcionarioRows}</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		);
	}
}

export default ListaFuncionarios;

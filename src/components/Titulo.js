import "./Titulo.css";
import React from "react";

const Titulo = (props) => {
	return (
		<div className={props.centralizado ? " alinhado-centro" : " alinhado-esquerda"}>
			<h1 className="titulo">{props.nome}</h1>
			{props.descricao ? <h3 className="descricao-titulo">{props.descricao}</h3> : ""}
		</div>
	);
};

export default Titulo;

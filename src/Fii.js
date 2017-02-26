import React, {Component} from "react"

class Fii extends Component {

    render(){
        return (
            <tr>
                <td>{this.props.codigo}</td>
                <td>{this.props.data_base}</td>
                <td>{this.props.cotacao_base}</td>
                <td>{this.props.data_pagamento}</td>
                <td>{this.props.valor_rendimento}</td>
                <td>{this.props.porcentagem_rendimento}</td>
                <td>{this.props.observacao}</td>
            </tr>
        )
    }
}

export default Fii

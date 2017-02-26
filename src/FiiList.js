import React, {Component} from "react"

import Fii from "./Fii"

class FiiList extends Component {

    render(){
        const fiis = this.props.list;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Data base</th>
                        <th>Cotação</th>
                        <th>Data Pagamento</th>
                        <th>Valor Rendimento</th>
                        <th>Porcentagem rendimento</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    {fiis.map((item, index) => <Fii {...item} key={index} />)}
                </tbody>
            </table>
        )
    }
}

export default FiiList

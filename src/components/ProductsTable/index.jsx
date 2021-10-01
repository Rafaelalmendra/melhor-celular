import { Link } from 'react-router-dom'

import imgEdit from '../../assets/edit.svg'
import imgDelete from '../../assets/delete.svg'

import './style.scss'

export function ProductsTable() {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th className="code">Codigo</th>
          <th>Modelo</th>
          <th>Preço</th>
          <th>Marca</th>
          <th>Cor</th>
          <th>Início das vendas</th>
          <th>Fim das vendas</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>23856234</td>
          <td>XT2041-1</td>
          <td>R$ 1.407,12</td>
          <td>Motorola</td>
          <td>Preto</td>
          <td>15/03/2020</td>
          <td>14/06/2020</td>
          <td className="buttons-container">
            <Link to="/edit">
              <button 
                className="button-table">
                <img src={imgEdit}
                alt="Botão de editar"
              />
              </button>
            </Link>

            <button
              className="button-table">
              <img src={imgDelete}
              alt="Botão de deletar"
            />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
import imgEdit from '../../assets/edit.svg'
import imgDelete from '../../assets/delete.svg'

import './style.scss'

export function ProductsTable() {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Modelo</th>
          <th>Preço</th>
          <th>Marca</th>
          <th>Cor</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="table-content">23856234</td>
          <td className="table-content">XT2041-1</td>
          <td className="table-content">R$ 1.407,12</td>
          <td className="table-content">Motorola</td>
          <td className="table-content">Preto</td>
          <td className="buttons-container">
            <button className="button"> <img src={imgEdit} alt="Botão de editar" /></button>
            <button className="button"> <img src={imgDelete} alt="Botão de deletar" /></button>
          </td>
        </tr>
      </tbody>

      
    </table>
  )
}
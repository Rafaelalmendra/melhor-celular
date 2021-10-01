import { Link } from "react-router-dom";
import phoneImg from '../../assets/phone.svg'

import './style.scss'

export function ProductsHeader() {
  return (
    <div className="products-header">
          <h2>Produtos</h2>

          <Link to='/create' style={{ textDecoration: 'none' }}>
            <button className="button">
                + 
                <img src={phoneImg} alt="Adicionar novo Celular"/> 
                ADICIONAR
            </button>
          </Link>
    </div>
  )
}
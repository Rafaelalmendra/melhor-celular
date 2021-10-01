import { Link } from 'react-router-dom'
import './style.scss'
import logoImg from  '../../assets/logo.svg'

export function Header() {
    return (
        <header className="container">
            <Link to='/'>
              <img src={logoImg} alt="Logo Melhor Celular" />
            </Link>
        </header>
    )
};
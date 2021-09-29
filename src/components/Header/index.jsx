import './style.scss'
import logoImg from  '../../assets/logo.svg'

export function Header() {
    return (
        <header className="container">
            <img src={logoImg} alt="Logo Melhor Celular" />
        </header>
    )
};
import { Link } from "react-router-dom";

export function Create() {
  return (
    <>
      <Link to='/' style={{ textDecoration: 'none' }}>
          <button>Voltar</button>
      </Link>
    </>
  )
}
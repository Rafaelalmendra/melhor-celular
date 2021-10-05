import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { ProductsHeader } from '../../components/ProductsHeader'

import imgEdit from '../../assets/edit.svg'
import imgDelete from '../../assets/delete.svg'
import './style.scss'

export function Home() {
  const [ create, setCreate ] = useState([])
  
  useEffect(() => {
    axios.get('https://phones--melhorcom.repl.co/phone', {
      headers: {
        "Content-Type": "application/json",
        cpf: '07955021339'
      }
    })
    .then((response) => {
      setCreate(response.data)
    })
    .catch(() => {
      console.log('request failed!')
    })
  }, [])

  function deleteCreation(id) {
    axios.delete(`https://phones--melhorcom.repl.co/phone/${id}`)

    setCreate(create.filter(create => create._id !== id))
  }

  return (
    <main className="main">
      <ProductsHeader />
      <table className="table-container">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Modelo</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Cor</th>
            <th className="date">Início das vendas</th>
            <th className="date">Fim das vendas</th>
          </tr>
        </thead>

      {create.map((post, key) => {
        return (
          <tbody key={key}>
            <tr>
              <td>{post.code}</td>
              <td>{post.model}</td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(post.price)}
              </td>
              <td>{post.brand}</td>
              <td>{post.color}</td>
              <td className="date">
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(post.date)
                )}
              </td>
              <td className="date">
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(post.endDate)
                )}
              </td>

              <td className="buttons-container">
                <Link to={{ pathname: `/edit/${post._id}` }}>
                  <button className="button-table">
                    <img src={imgEdit} alt="Botão de editar"/>
                  </button>
                </Link>
                
                <button className="button-table" onClick={() => deleteCreation(post._id)}>
                  <img src={imgDelete} alt="Botão de deletar"/>
                </button>
              </td>
            </tr>
          </tbody>
        )
      })}
      </table>
    </main>
  )
}
import { Link, useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

import '../../styles/global.scss'
import './style.scss'
import { useEffect } from "react";

//Form validation
const schema = yup.object({
  model: yup.string()
  .max(255, "Deve conter no máximo 255 caracteres")
  .min(2, "Deve conter no mínimo 2 caracteres")
  .typeError("Este campo é obrigatório!")
  .required(),

  brand: yup.string()
    .strict(true)
    .trim('Não pode haver espaçamentos')
    .max(255, "Deve conter no máximo 255 caracteres")
    .min(2, "Deve conter no mínimo 2 caracteres")
    .typeError("Este campo é obrigatório!")
    .required(),

  price: yup.number()
    .positive("O Número deve ser positivo.")
    .typeError("Este campo é obrigatório!")
    .required(),

  date: yup.date('dd/MM/yyyy')
    .min("2018/12/25", "A data de início deve ser posterior ao dia 25/12/2018.")
    .typeError("Este campo é obrigatório!")
    .required(),

  endDate: yup.date()
    .min(yup.ref('date'),"A data de fim deve ser posterior a data de início.")
    .typeError("Este campo é obrigatório!")
    .required(),
});

export function Edit() {
  let history = useHistory()

  const { id } = useParams()
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })
  
  const onSubmit = data => {
    ///formatting the date
    const Formated = {
      ...data,
      date: new Intl.DateTimeFormat('pt-br').format(data.date),
      endDate: new Intl.DateTimeFormat('pt-br').format(data.endDate),
    }
    
    axios.patch(`https://phones--melhorcom.repl.co/phone/${id}`, JSON.stringify(Formated), {
      headers: {
        "Content-Type": "application/json",
        cpf: '07955021339'
      }
    })
    .then(() => {
      console.log('successful request!')
      history.push('/')
    })
    .catch(() => {
      console.log('request failed!')
    })
  }
  
  useEffect(() => {
    axios.get(`https://phones--melhorcom.repl.co/phone/${id}`)
    .then((response) => {
      reset(response.data)
    })
  }, [])
  
  return (
    <>
      <main>
        <div className="card-detail">
          <h2>Editar produto</h2>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="fields">
              <div className="field-body">
                <label>Modelo</label>
                <input
                  type="text" 
                  placeholder="XT2041-1"
                  name="model"
                  {...register("model")} 
                />
                <p className="error-message">{errors.model?.message}</p>
              </div>

              <div className="field-body">
                <label>Marca</label>
                <input 
                  type="text" 
                  placeholder="Motorola"
                  name="brand"
                  {...register("brand")}
                />
                <p className="error-message">{errors.brand?.message}</p>
              </div>
            </div>

            <div className="fields">
              <div className="field-body">
                <label>Cor</label>
                <select
                  name="color"
                  {...register("color")}
                >
                  <option value="BLACK">Preto</option>
                  <option value="WHITE">Branco</option>
                  <option value="GOLD">Dourado</option>
                  <option value="PINK">Rosa</option>
                </select>
              </div>

              <div className="field-body">
                <label>Preço</label>
                <input
                  type="number"
                  placeholder="1.400,00"
                  name="price"
                  {...register("price")}
                />
                <p className="error-message">{errors.price?.message}</p>
              </div>
            </div>

            <div className="fields">
              <div className="field-body">
                <label>Inicio das vendas</label>
                <input
                  type="date"
                  name="date"
                  {...register("date")}
                />
                <p className="error-message">{errors.date?.message}</p>
              </div>

              <div className="field-body">
                <label>Fim das vendas</label>
                <input
                  type="date"
                  name="endDate"
                  {...register("endDate")}
                />
                <p className="error-message">{errors.endDate?.message}</p>
              </div>
            </div>

            <div className="button-field">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <button className="button-create">Voltar</button>
              </Link>
              <button className="button-create" type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
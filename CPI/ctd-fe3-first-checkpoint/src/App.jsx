import { useState } from 'react'
import './style2.scss'
import { Cards } from "./Card"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  const [nomeCor, setNomeCor] = useState('')
  const [cores, setCores] = useState('')
  const [formularioErro, setFormularioErro] = useState(false)
  const [allColors, setAllColors] = useState([''])

  function cadastrarCor(event) {

    event.preventDefault()

    const novoProdutoCadastrado = {
      name: nomeCor,
      cor: cores,
    }

    if (nomeCor === '' || cores === '') {

      setFormularioErro(true)
      /* alert('Campo não pode ser vazio') */

    } else {
      setFormularioErro(false)
      setAllColors([...allColors, novoProdutoCadastrado])
      setNomeCor('')
      setCores('')

    }
  }

  return (
    <body>
    <main className="body">
   
      
        <h1 className="tittle">Adicione aqui sua cor</h1>
        <div className="form">
        <paper elevation={3} className="formflex">
          <form className={formularioErro ? 'form-error' : 'formInputs'} onSubmit={event => cadastrarCor(event)}>
            <div className="1label">
              <label className="tittle-wrapper" htmlFor="nomeCor">Nome da cor: </label>
              <input id="nomeCor" type="text" value={nomeCor} onChange={event => setNomeCor(event.target.value)} />
            </div>
            <div className="2label">
              <label className="tittle-wrapper" input="cores">Cor (Hexadecimal): </label>
              <input type="color" value={cores} onChange={event => setCores(event.target.value)} />
            </div>
            <Button className="button" variant="contained" type='submit' onClick={(event) => cadastrarCor(event)}>Cadastrar</Button>
          </form>
          {formularioErro ? (
            <span>Necessário preencher todos os campos</span>
          ): null}
        </paper>
      </div>
      <div className="card" color="#ffff">
      <section className='cards'>
        {
          allColors.map(

            color => {
              return (
                <Cards
                  data={color}
                />
              )
            }
          )
        }
      </section>
      </div>
   
    </main>
    </body>
  )
}

export default App




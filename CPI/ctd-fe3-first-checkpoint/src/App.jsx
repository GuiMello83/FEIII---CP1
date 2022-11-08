import { useState } from 'react'
import './style.scss'
import { Card } from "./Card"
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

      } else {

        setFormularioErro(false)

        setAllColors([...allColors, novoProdutoCadastrado])

        setNomeCor('')
        setCores('')
      }
    }

  return (
    <main className="teste">
    <div className="App">
      <h1>Adicione aqui sua cor</h1>

      <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastrarCor(event)}>
        <div>
          <label htmlFor="nomeCor">Nome</label>
          <input id="nomeCor" type="text" value={nomeCor} onChange={event => setNomeCor(event.target.value)} />
        </div>
        <div>
          <label input="cores">Cor</label>
          <input id="cores" type="text" value={cores} onChange={event => setCores(event.target.value)} />
        </div>
      </form>
      <button type='submit'>Cadastrar</button>
    </div>
    <section className='colors'>
                {
                    allColors.map(
                        color => {
                            return (
                                <Card
                                    productData={color}
                                />
                            )
                        }
                    )
                }
            </section>
    </main>
  )
}

export default App



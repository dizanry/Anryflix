import React, { useState} from 'react';
import PageDefault from '../../../components/PageDefault'
import {Link} from 'react-router-dom'

function CadastroCategoria()  {
  const valoresIniciais = {
    nome: '',
    descricao:'',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  

    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
    }

   function handleChange(infosDoEvento)  {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value);
    }

    return (
      <PageDefault>
     <h1>Cadastro de Categoria: {values.nome}</h1>

     <form onSubmit={function handleSubmit(infosDoEvento)  {
      infosDoEvento.preventDefault();
      setCategorias([
        ...categorias,
        values
      ]);

      setValues(valoresIniciais)
     }}>
       <div>
        <label>
          Nome da categoria:
          <input type="text"
          name='nome'
          value={values.nome}
          onChange={handleChange}
          />
        </label>
          </div>
          <div>
        <label>
          Descrição:
          <textarea type="text"
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
          />
        </label>
          </div>
          <div>
        <label>
          Cor:
          <input type="color"
          name='cor'
          value={values.cor}
          onChange={handleChange}
          />
        </label>
        </div>

        <button>
          Cadastrar
        </button>
        
     </form>

          <ul>
        {categorias.map((categoria, indice)   =>  {
          return (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
            </li>
          )
        })}
          </ul>
      <Link to="/">
       <h2>Ir para a home</h2>
      </Link>
    
      </PageDefault>
    )
  }
  export default CadastroCategoria;

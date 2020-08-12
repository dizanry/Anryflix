import React, { useState} from 'react';
import PageDefault from '../../../components/PageDefault'
import {Link} from 'react-router-dom'

function CadastroCategoria()  {
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');
  



    return (
      <PageDefault>
     <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

     <form>
        <label>
          Nome da categoria:
          <input type="text"
          value={nomeDaCategoria}
          onChange={function funcaoHandle(infosDoEvento)  {
            console.log('[nomeDaCategoria]', nomeDaCategoria);
            console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
            setNomeDaCategoria(infosDoEvento.target.value);
          }}
          />
        </label>

        <button>
          Cadastrar
        </button>
        
     </form>

      <Link to="/">
       <h2>Ir para a home</h2>
      </Link>
    
      </PageDefault>
    )
  }
  export default CadastroCategoria;

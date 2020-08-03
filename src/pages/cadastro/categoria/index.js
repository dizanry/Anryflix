import React from 'react';
import PageDefault from '../../../components/PageDefault'
import {Link} from 'react-router-dom'

function CadastroVideo()  {
    return (
      <PageDefault>
     <h1>Cadastro de Categoria</h1>

     <form>
        <label>
          Nome da categoria:
          <input type="text" />
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
  export default CadastroVideo;

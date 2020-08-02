import React from 'react';
import './App.css';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
    let carousels = [];
    for(let i=0; i < dadosIniciais.categorias.length; i++){
        let categoria = dadosIniciais.categorias[i];
        carousels.push(<Carousel
            ignoreFirstVideo
            category={categoria}
        />);
    }

  return (
    
    <div style={{background: "#141414"}}>
        <Menu />

        <BannerMain
        data={dadosIniciais} />


        {carousels}


        
        <Footer
         
          />
      
    </div>
  );
}
export default App;
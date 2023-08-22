import { useState } from "react";
import Banner from "./componentes/Banner/Index";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4} from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Front-end',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DevOps',
      cor: '#FDE7EB'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEONARDO D CERETTA',
      cargo: 'Desenvolvedor frontend',
      imagem: 'https://www.github.com/LeoCeretta.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEONARDO D CERETTA',
      cargo: 'Desenvolvedor frontend',
      imagem: 'https://www.github.com/LeoCeretta.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEONARDO D CERETTA',
      cargo: 'Desenvolvedor frontend',
      imagem: 'https://www.github.com/LeoCeretta.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEONARDO D CERETTA',
      cargo: 'Desenvolvedor frontend',
      imagem: 'https://www.github.com/LeoCeretta.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEONARDO D CERETTA',
      cargo: 'Desenvolvedor frontend',
      imagem: 'https://www.github.com/LeoCeretta.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEONARDO D CERETTA',
      cargo: 'Desenvolvedor frontend',
      imagem: 'https://www.github.com/LeoCeretta.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEONARDO D CERETTA',
      cargo: 'Desenvolvedor frontend',
      imagem: 'https://www.github.com/LeoCeretta.png',
      time: times[5].nome
    },
  ]
  
  const [colaboradores, setColaboradores] = useState(inicial);
 
  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }
  
  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores, colaborador])} 

      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time
            mudarCor={mudarCorDoTime} 
            key={indice} 
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            aoFavoritar={resolverFavorito}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

import './App.sass';
import {useState} from 'react';

function App() {

  const notas = [
    {
      nombre: 'Do',
      link: require('./notes/do.wav'),
      sostenido : true
    },
    {
      nombre: 'Re',
      link: require('./notes/re.wav'),
      sostenido : true
    },
    {
      nombre: 'Mi',
      link: require('./notes/mi.wav'),
    },
    {
      nombre: 'Fa',
      link: require('./notes/fa.wav'),
      sostenido : true
    },
    {
      nombre: 'Sol',
      link: require('./notes/sol.wav'),
      sostenido : true
    },
    {
      nombre: 'La',
      link: require('./notes/la.wav'),
      sostenido : true
    },
    {
      nombre: 'Si',
      link: require('./notes/si.wav'),
    },
  ]
 

  const handlerClickNote = nota =>{
    setSonando(nota.nombre);
    const sonido = new Audio(nota.link.default);
    sonido.play()
    
  }

// Hook UseState
// 1-Variable inicial
// 2- Func que se dedique a actualizar la Variable
// 3-valor inicial de la variable

  const [sonando, setSonando] = useState('');
  

 
setTimeout(() =>{
  setSonando('')
},500)

  return (
    <div>
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>Hecho por Male</h2>
        <h3 className="esta-sonando">{sonando}</h3>
      </div>
      <div className="container">
        {notas.map(nota => (
          <div 
            key={Math.random() * 100}
            className={`nota ${sonando == nota.nombre && 'sonando'}`} 
            onClick={() => handlerClickNote(nota)}
          >
            {/* {nota.sostenido && <div className="negra"></div>} */}
            {nota.sostenido ? <div className="negra"></div> : null}
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default App;

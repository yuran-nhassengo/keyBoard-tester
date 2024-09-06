
import { useEffect } from 'react'
import './App.css'
import { Key } from './components/keys'

import {teclado} from './components/keys/teclas'

function App() {

  
  useEffect(() =>{
    
    const handleKeyDown = (event) => {
        event.preventDefault();

        console.log(`Tecla pressionada: ${event.key}`);
    };

    window.addEventListener('keydown',handleKeyDown);

    return () => {
      window.removeEventListener('keydown',handleKeyDown);
    };

  },[]);


  return (
    <div className="flex  justify-center">
        <div className="flex flex-wrap justify-start mt-8 w-[1000px] min-h-[280px] bg-gray-900">

            {
              teclado.map((tecla) =>{

               return ( <Key key={tecla.id} text={tecla.label} />)
              })
            }
            
        </div>
    </div>

  )
}

export default App

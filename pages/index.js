import { useState } from "react"
function Home(){
   return (
      <div className="Cor_Fundo">
         <h1>Teste Contador</h1>
         <Contador />
      </div>

   ) 
}

function Contador(){
   const [contador,setContador] = useState(1)
  
  function adicionarContador(){
   setContador(contador + 1)
  }
   return(
      <div>
         <div>{contador}</div>
         <p></p>
         <button onClick={adicionarContador}>Adicionar</button>
      </div>
   )
}

export default Home
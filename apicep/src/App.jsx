import { useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleBuscacep = async (event) => {
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);//crase
      if(!response.ok){
        throw new error("CEP não encontrado");
      }
      setEndereco(await response.json());
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className='container'>
        <h1>busca de endereço</h1>
        <input 
        type="number"
        placeholder='Digite seu CEP' 
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        />
        <button onClick={handleBuscacep}>Buscar</button>
        <div className='endereço'>
          {endereco ?(<>
            <p>{endereco.cep}</p>
            <p>{endereco.logradouro}</p>
            <p>{endereco.bairro}</p>
            <p>{endereco.localidade}</p>
            <p>{endereco.uf}</p>
            <p>{endereco.ddd}</p>
          </>): null}
        </div>
      </div>
    </>
  )
}

export default App

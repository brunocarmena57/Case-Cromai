import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Pythagoras() {
    // Variável para recolher o valor de A
    const [a, setA] = useState('');
    // Variável para recolher o valor de B
    const [b, setB] = useState('');
    // Variável para recolher o valor da hipotenusa C
    const [c, setC] = useState('');

     // Função para o form
     function handleSubmit(e) {
         
        e.preventDefault();
        // Uso de Axios para fazer o GET request no servidor
        axios.get(`http://localhost:5000/solve?a=${a}&b=${b}`)
        // Quando a resposta chega, atualiza a variável de C com o novo resultado
            .then(res => setC(res.data))
        // Se ocorrer um erro, faz um console.log
            .catch(err => console.log(err));
  }

  return (
    <div className='main'>
        <h1>Calcule o Teorema de Pitágoras:</h1>
        <form onSubmit={handleSubmit}>
            {/* Campo de input para o valor A */}
            <input className='input' type="text" placeholder="Valor A" value={a} onChange={e => setA(e.target.value)} />
            {/* Campo de input para o valor B */}
            <input className='input' type="text" placeholder="Valor B" value={b} onChange={e => setB(e.target.value)} />
            {/* Botão pra fazer o submit */}
            <button className='submit' type="submit">Calculate</button>
            {/* Display do resultado de C */}
            <p className='answer'>Resultado do teorema: {c}</p>
            </form>
    </div>
);
}

export default Pythagoras;

import { useState } from 'react';

let nextId = 0;


function Tabla({mipropiedad}) {




  return (
    <div class="container sm-auto px-100 pt-6 rounded-sm ">
      <table class="border-collapse border border-slate-500  px-2">
        <thead>
          <tr className=' pr-28'>
            <th class="border border-slate-600  border-collapse">#</th>
            <th class="border border-slate-600 border-collapse  px-2">Atomo</th>
            <th class="border border-slate-600  border-collapse px-2">Masa molecular MM</th>
            <th class="border border-slate-600  border-collapse px-2">Masa Subtotal</th>
            <th class="border border-slate-600  border-collapse px-2">Masa Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-700  px-2">2</td>
            <td class="border border-slate-700  px-2">dee</td>
            <td class="border border-slate-700  px-2">fg</td>
            <td class="border border-slate-700  px-2">ceed</td>
            <td class="border border-slate-700  px-2">fg</td>
          </tr>
        {mipropiedad.map(fila => {
          return(
            <tr>
            <td class="border border-slate-700  px-2">{fila.Number}</td>
            <td class="border border-slate-700  px-2">{fila.atomo}</td>
            <td class="border border-slate-700  px-2">{fila.masamolecular}</td>
            <td class="border border-slate-700  px-2">{fila.masatotal}</td>
            <td class="border border-slate-700  px-2">{fila.masasubtotal}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}






export default function List( ) {
  const [name, setName] = useState('');


  const [formula, setFormula] = useState([{
    Number: 1, atomo: "Co", masamolecular: 2, masatotal: 23, masasubtotal: 25
  }, {
    Number: 1, atomo: "Co", masamolecular: 2, masatotal: 23, masasubtotal: 25
  }, {
    Number: 1, atomo: "Co", masamolecular: 2, masatotal: 23, masasubtotal: 25
  }]);
 

  
  function handleClick(){

     setFormula(stated => {
              return [
                ...stated, {
                Number: 1, atomo: name, masamolecular: 2, masatotal: 23, masasubtotal: 25
              }]
            })
             }


  

  return (
    <>
      <div class="container sm-auto px-1">
        <h1 className='font-sans text-lg  pt-3' >Calculadora de Peso Molecular</h1>
        <p className='pt-9'>   Calculadora de Peso Molecular
          Esta calculadora en línea se puede utilizar para calcular el peso molecular medio (MW) de las moléculas introduciendo las fórmulas químicas (por ejemplo, C3H4OH(COOH)3). O puede elegir por una de las siguientes dos listas de opciones, que contienen una serie de compuestos orgánicos comunes (incluida su fórmula química) y todos los elementos. La calculadora de masa molecular reconocerá las fórmulas ingresadas, que están incluidas en la lista de compuestos orgánicos.
          La calculadora maneja como máximo dos niveles de soporte diferentes. Asegúrese de ingresar la molécula de cristalización al final (por ejemplo, C2HCl3O.H2O</p>
        <div class="grid grid-cols-3 gap-1 mt-3  pt-6">

          <div className='font-serif text-lg'>FORMULA QUIMICA </div>

          <div ><input className='rounded-md focus-visible:outline-none' value={name}
            onChange={e => setName(e.target.value)}></input></div>

          <div ><button className='mt-1 ml-1 bg-sky-800 rounded-md px-3 hover:bg-sky-400' onClick={handleClick}
          >Calcular</button></div>
        </div>
      </div>
      
      <Tabla mipropiedad={formula}/>
    </>



  );
}

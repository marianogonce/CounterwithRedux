import React from "react";
import {useDispatch, useSelector} from 'react-redux';

export default function Contador() { 

  const contador = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function getBadgeClasses() {
    let classes= 'badge m-2 badge-';
    if (contador=== 0) {
    classes += 'warning';
    return classes;
    } else if (contador <0) {
    classes += 'danger';
    return classes;
    } else {
    classes += 'primary';
    return classes;
    }
  }

  function formatCount () {
    return contador === 0 ? "Zero" : contador; 
    }
  
  return (
    <div>
    <h1 className='m-2 ml-4 bold'>Contador con Redux</h1>
    <h3 className='m-2 ml-4 text-info'>TP Módulo 5 Unidad 3</h3>
    <h5 className='m-2 ml-4 text-secondary'>Goncevatt Torres Mariano</h5>
    <button className='btn btn-danger btn-sm m-1 mt-3 ml-4' onClick={() => dispatch({type:'Decrement'})}>Decrement</button>
    <span className={getBadgeClasses()}>{formatCount()}</span>
    <button className='btn btn-primary btn-sm m-1 mt-3' onClick={() => dispatch({type:'Increment'})}>Increment</button>
    <button className='btn btn-warning btn-sm m-1 mt-3' onClick={() => dispatch({type:'Restart'})}>Restart</button>
  </div>
  );
}

   

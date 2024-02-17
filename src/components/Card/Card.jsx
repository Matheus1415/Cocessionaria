import React from 'react';
import carrosData from '../../assent/json/mook.json';

export const Card = () => {
  return (
        <>
            {carrosData.carros.map(carro => (
            <div key={carro.id} className='Card'>
                <h2>{carro.nome}</h2>

            </div>
            ))}
        </>
  );
};


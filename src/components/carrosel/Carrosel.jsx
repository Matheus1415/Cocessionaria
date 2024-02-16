import React, { useEffect, useState } from 'react';
import { CarroselStyle } from './CarroselStyle.jsx';

export const Carrosel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const setaEsquerda = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const setaDireita = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));    
    };

    const stop = (stop) => {
        return stop ?
            setInterval(() => {
                if (currentIndex === 0) {
                    setaEsquerda();
                } else if (currentIndex == 3) {
                    setaDireita();
                }
            }, 5000) : '';
    };

    useEffect(() => {
        const intervalId = stop(true);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <CarroselStyle>
            <div className="carousel">
                <button onClick={setaEsquerda}>&#10094;</button>                    
                <img src={require(`../../assent/${images[currentIndex]}`)} alt={`Image ${currentIndex + 1}`} />
                <button onClick={setaDireita}>&#10095;</button>
            </div>
        </CarroselStyle>
    );
};

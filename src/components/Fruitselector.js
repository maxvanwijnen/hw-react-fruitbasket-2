import React from 'react';
import css from '../styles/Fruitselector.module.css';

const FruitSelector = ({fruitType, amount, setAmount}) => {

    return (
        <div className={css['fruit-selector']}>
            {fruitType}
            <div className={css['button-wrapper']}>
                <button onClick={()=> setAmount(amount > 0 ? amount - 1 : amount)}>
                    -
                </button>
                {amount}
                <button onClick={()=> setAmount(amount + 1 )}>
                    +
                </button>
            </div>
        </div>

    )
}

export default FruitSelector;
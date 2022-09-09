import React, {useState} from 'react';
import css from "../styles/Basket.module.css";
import FruitSelector from "./Fruitselector";

const Basket = () => {
    const reset = () => {
        setBananaAmount(0);
        setStrawberryAmount(0);
        setKiwiAmount(0);
        setAppleAmount(0);
    }

    const [bananaAmount, setBananaAmount] = useState(0);
    const [strawberryAmount, setStrawberryAmount] = useState(0);
    const [appleAmount, setAppleAmount] = useState(0);
    const [kiwiAmount, setKiwiAmount] = useState(0);

    return (
        <section className={css['basket']}>
            <h2>Welk fruit wilt u bestellen</h2>
            <FruitSelector fruitType="🍌 Banaan" amount={bananaAmount} setAmount={setBananaAmount}/>
            <FruitSelector fruitType="🍏 Appel" amount={appleAmount} setAmount={setAppleAmount}/>
            <FruitSelector fruitType="🍓 Aardbei" amount={strawberryAmount} setAmount={setStrawberryAmount}/>
            <FruitSelector fruitType="🥝 Kiwi" amount={kiwiAmount} setAmount={setKiwiAmount}/>
            <button className={css['reset-button']} onClick={()=>reset()}>Reset</button>
        </section>
    )
}

export default Basket;
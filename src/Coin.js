import React from 'react';
import './Coin.css'

const Coin = ({name, image, symbol, price,priceChange,marketcap,low_24h,high_24h}) => {
    return (
        <div className="coin-cointainer">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">₹ {price}</p>
                    {priceChange < 0 ?(
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ):
                    (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                    ₹ {marketcap}
                    </p>
                    <p className="low-24h">
                     ₹ {low_24h}</p>
                    <p className="high-24h">
                     ₹ {high_24h}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin

import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios, { Axios } from 'axios'
let API_KEY = import.meta.env.VITE_API_KEY

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";


function Currency() {
    const [amount , setAmount] = useState(0);
    const [fromCurrency , setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);
  
    const exchange = async () => {
        if (amount<0) {
            alert("0'dan kucuk girilemez!");
            return;
        }
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        setResult(((response.data.data[toCurrency]) * amount).toFixed(2));

    }
  
  
    return (
    <div className='currency-div'>
        <div style={{marginTop:'-30px'}}>
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        
        <div>
            <input
                value={amount > 0 ? amount : 0}
                onChange={(e) => setAmount(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    exchange();
                }
                }}
                type="number"
                className='amount'
            />

        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight style={{fontSize: '30px'}} />

        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
        </select>

        <input
        value = {result}
        onChange={(e) => setResult(e.target.value)}
        type="number" className='result' />
        </div>

        <div>
            <button 
            onClick={exchange}
            style={{marginTop: '20px', width: '100px', height: '30px', backgroundColor: 'pink', borderRadius:'5px', cursor:'pointer'}}>ÇEVİR</button>
        </div>
        
        
    </div>
  )
}

export default Currency;
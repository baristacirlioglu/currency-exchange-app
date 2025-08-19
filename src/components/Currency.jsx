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
    const currencies = ['USD', 'EUR', 'TRY'];
  
    const exchange = async () => {
        if (amount<0) {
            alert("0'dan kucuk bir sayi girilemez!");
            return;
        }
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        setResult(((response.data.data[toCurrency]) * amount).toFixed(2));

    }
  
  
    return (
  <div className="flex flex-col items-center justify-center mt-[50px] w-[450px] h-[220px] border-[3px] border-black bg-[#00ffff] rounded-[20px]">
    <h3 className="mb-4 font-semibold">DÖVİZ KURU UYGULAMASI</h3>

    {/* Input ve seçimler yatay hizalı */}
    <div className="flex items-center space-x-2">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        onKeyDown={(e) => { if (e.key === 'Enter') exchange(); }}
        className="w-[80px] h-[30px] px-1 bg-white border border-black rounded"
      />

      <select
  value={fromCurrency}
  onChange={(e) => setFromCurrency(e.target.value)}
  className="w-[70px] h-[30px] bg-white border border-black rounded"
>
  {currencies
    .filter((c) => c !== toCurrency) // Sağda seçilen değer solda gözükmesin
    .map((c) => (
      <option key={c}>{c}</option>
    ))}
</select>

<FaRegArrowAltCircleRight className="text-2xl" />

<select
  value={toCurrency}
  onChange={(e) => setToCurrency(e.target.value)}
  className="w-[70px] h-[30px] bg-white border border-black rounded"
>
  {currencies
    .filter((c) => c !== fromCurrency) // Solda seçilen değer sağda gözükmesin
    .map((c) => (
      <option key={c}>{c}</option>
    ))}
</select>

      <input
        type="number"
        value={result}
        readOnly
        className="w-[80px] h-[30px] px-1 bg-white border border-black rounded"
      />
    </div>

    {/* Buton */}
    <button
      onClick={exchange}
      className="mt-4 w-[100px] h-[30px] bg-orange-400 hover:bg-orange-600 text-black rounded font-semibold"
    >
      ÇEVİR
    </button>
  </div>
);

}

export default Currency;
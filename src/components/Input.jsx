import React from 'react'
import { useId } from 'react';
import "./Input.css"

function InputBOx({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
}) {
    const amountinputId = useId();


  return (
    <div className='first'>
        <section id='container'>
            <section className="div1">
                <label htmlFor={amountinputId}>{label}</label>
                
                <input className='in' type="number" id={amountinputId} placeholder='number' value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>

            </section>

            <section className="div2">
                <label htmlFor="">Currency Type</label>
                <select className="select" value={selectCurrency} onChange={(e)=> onAmountChange && onCurrencyChange(e.target.value)}>

                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </section>
        </section>
    </div>
  )
}

export default InputBOx;
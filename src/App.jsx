import { useState } from "react"
import "./App.css"
import { InputBOx } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
 const[amount, setAmount] = useState(0);
 const [from, setFrom] =useState("usd")
 const [to, setTo] =useState("inr")
 const [convertedAmount,setConvertedAmount] = useState(0)

 const currencyInfo = useCurrencyInfo(from)
 let options = Object.keys(currencyInfo)

 const swap =()=>{
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
 }

 let convert = ()=>{
  setConvertedAmount(amount*currencyInfo[to])
 }



  return (
    <div id="main">
      <h1>Currency convertor</h1>
      <form id="form" onSubmit={(e)=>{e.preventDefault(); convert()}}>
        <div>
          <InputBOx label={from}
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setAmount(currency)}
          selectCurrency={from}
          onAmountChange={(amount)=>setAmount(amount)}
          />
        </div>
        <button id="swap" type="button" onClick={swap}>Swap</button>
        <div>
          <InputBOx label={to}
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setTo(currency)}
          selectCurrency={to}
          onAmountChange={(amount)=>setAmount(amount)}
          />
        </div>
        <button id="submit" type="submit">Convert {from} to {to}</button>
      </form>
    </ div>
  )
}

export default App

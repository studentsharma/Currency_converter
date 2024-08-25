import React from 'react'

function Input({
    label,
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency

}) {

  const handleAmountChange = (e) => {
    const value = e.target.value;
    onAmountChange(Number(value));
    e.target.value = onAmountChange;
  };




  return (
    <div className='h-full flex justify-between items-center'>
      <div className='w-3/4'>
        <label htmlFor="inp" className='text-xl ml-4 block'>{label}</label>
        <input 
            type="number" 
            id='inp' 
            value={amount}
            onChange={handleAmountChange} // bad me dekhna
            className='w-3/4 p-4 ml-4 rounded-xl border-2 shadow-2xl mt-4'/>
      </div>
      
      <div className='text-lg'>
        <h1 className='mr-3 mb-2'>Currency</h1>
        <select name="" id="" className='rounded-md border-2 w-16 h-10' value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value) }>
            {currencyOptions.map((curr)=>(
                <option key={curr} value={curr} >
                {curr}
                </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Input

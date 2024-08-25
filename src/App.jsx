import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import Input from './components/Input'
import { HiArrowsRightLeft } from "react-icons/hi2"


function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState('usd');
  const [to, setto] = useState('inr');
  const [convertamount, setconvertamount] = useState(0);

  const currencyInfo = useCurrency(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setconvertamount(amount * currencyInfo[to])
  }


  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertamount(amount)
    setamount(convertamount)
  }

  return (  
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-3/5 bg-gray-200 rounded-3xl'>
          <div className='flex items-center m-8'>

            <div className='w-2/5 m-auto h-44  bg-white border-2 border-gray-200 rounded-lg'>

              <Input

                label="from : "
                amount={amount}
                onAmountChange={(amount) => setamount(amount)}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(currency) => setfrom(currency)} />

            </div>
            <div >
              <button onClick={swap} className='bg-white flex items-center justify-center  border-2 shadow-2xl w-10 h-10 rounded-full'><HiArrowsRightLeft /></button>
            </div>
            <div className='w-2/5 m-auto h-44 bg-white border-gray-400 rounded-lg'>
              <Input

                label="To : "
                currencyOptions={options}
                selectCurrency={to}
                amount={convertamount}
                onCurrencyChange={(currency) => setto(currency)}

              />
            </div>
          </div>
          <div className='float-right mr-20 -mt-5'>
            <button onClick={convert} className="bg-white text-green-600  mt-5  mb-5 rounded-lg text-2xl w-32 h-20">Convert</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App

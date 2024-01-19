import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import OtpForm from './components/OtpForm';
import './App.css'

function App() {
  const [inputCustomerNumber, setInputCustomerNumber] = useState<string>("");
  const [otpForm, setOtpForm] = useState<boolean>(false)
  const numberRef = useRef<HTMLInputElement>(null)

  function handleNumberCheck(e:ChangeEvent<HTMLInputElement>){
    let inputNumber =e.target.value.replace(/[^0-9]/g, '') ;
    setInputCustomerNumber(inputNumber)
  }

  function handleNumberSubmit(e: FormEvent){
    e.preventDefault();
    if(numberRef.current?.value){
        setInputCustomerNumber(numberRef.current.value);
        setOtpForm(true);
    }else{
      alert('error')
    } 
    console.log('number:'+ numberRef.current?.value) 
  }

  return (
    <>
      {otpForm ? <OtpForm/>: <section>
        <form onSubmit={handleNumberSubmit}>
          
          <input ref={numberRef} type='text' id='inputNumber' onChange={handleNumberCheck} maxLength={10} minLength={10} placeholder='enter phone number' value={inputCustomerNumber}/>
          <button type='submit' id='submitbtn'>Submit</button>
        </form>
      </section>}
    </>
  )
}

export default App

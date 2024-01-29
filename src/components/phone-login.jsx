import React, { useState } from 'react'

const PhoneOtpLogin = () => {

    const [phoneNumber,setPhoneNumber]=useState("")

    const [showOtp,setShowOtp]=useState(false)

    const phoneSubmit=(e)=>{
          e.preventDefault();

          const regex=/[^0-9]/g;

          if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert('phone number')
            return;
          }

          setShowOtp(true)
    }
  return (
    <div>
        {!showOtp?
  ( <form onSubmit={phoneSubmit}>
    
    <input
      
      type='text'
      value={phoneNumber}
      onChange={(e)=>{
        setPhoneNumber(e.target.value)
      }}

      placeholder='enter phonenumber'
     />

       <button type="submit">submit</button>
   </form>)
   :(<div>
    <p>Enter Otp Sent {phoneNumber}
        </p>
         </div>)
}


    </div>
  )
}

export default PhoneOtpLogin
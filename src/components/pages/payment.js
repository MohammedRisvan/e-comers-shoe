import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../../App'

const Payment = () => {
  const {price}=useContext(Mycontext)
  return (
    <div className='payment'>
        <h1>PAYMENT SESSION</h1>
      <form>
        <label>ENTER NAME</label>
        <input type='text'
        name="name"
        placeholder='ENTER YOUR NAME'
        />
        <label>ENTER YOUR PHONE NUMBER</label>
        <input type='number'
        name='number'
        placeholder='ENTER YOUR MOBILE NUMBER'
        />
        <label>ENTER EMAIL</label>
        <input type='email'
        name='email'
        placeholder='example@gmail.com'
        />
        <label>ENTER PASSWORD</label>
        <input type='password'
        name='password'
        placeholder='PASSWORD'
        />
        <h1>${price}</h1>
        <label>payment Methode</label>
        <select>
          <option value={1}>Cash on delivery</option>
          <option value={2}>UPI PAYMENT</option>

        </select>
      </form>
    </div>
  )
}

export default Payment

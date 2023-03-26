import React from 'react'

export const FormRow = ({type,name,value,receiveChange,labelText}) => {
  return (
    <div className='form-row'>
        <label htmlFor={name}>
            {labelText || name}
        </label>
        <input 
        type={type}
        value={value}
        name={name}
        onChange={receiveChange}
        className='form-input'
         />
    </div>
  )
}

export default FormRow

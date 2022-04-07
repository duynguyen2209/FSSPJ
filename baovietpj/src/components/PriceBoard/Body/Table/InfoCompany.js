import React, { useState } from 'react'
import './InfoCompany.scss'
function InfoCompany({ closemodal }) {
  const [checked, setChecked] = useState(true)
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <div className='infmodalBg'>
      <div className='Modalinfo-box'>
        <h2>Thông tin mã chứng khoán</h2>
        <button className='btn-close' onClick={() => closemodal(false)}>[ X ]</button>
        <div className='Showhidetab'>
            <h3>Xin chào</h3>
        </div>
      </div>
    </div>
  )
}

export default InfoCompany
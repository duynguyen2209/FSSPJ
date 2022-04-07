import React, { useState } from 'react'
import './ModalBox.scss'

function ModalBox({closemodal}) {
  const [checked,setChecked] = useState(true)
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <div className='ModalBg'>
      <div className='Modal-box'>
      <h2>Ẩn/Hiển các cột</h2>
      <button className='btn-close' onClick={()=>closemodal(false)}>[ X ]</button>
      <div className='Showhidetab'>
        <div className='Tabcontainer'>
          <ul className='nav-tab'>
            <li className='modal-tab-active'>
              <a>HOSE</a>
            </li>
            <li className='modal-tab'>
              <a>VN30</a>
            </li>
            <li className='modal-tab'>
              <a>HNX</a>
            </li>
            <li className='modal-tab'>
              <a>UPCOM</a>
            </li>
          </ul>
        </div>
        <div className='actiontab'>
          <div className='wrapper-actiontab'>
            <ul>
              <div className='col-config'>
                <li className='col-option'>
                  <input type="checkbox" 
                  checked={checked}
                  onChange={handleChange}
                  />
                  <label>Mã CK</label>
                </li>
                <li className='col-option'>
                  <input type="checkbox" />
                  <label>TC</label>
                </li>
                <li className='col-option'>
                  <input type="checkbox" />
                  <label>Trần</label>
                </li>
                <li className='col-option'>
                  <input type="checkbox" />
                  <label>Sàn</label>
                </li>
              </div>
              <li className='col-option'>
                <input type="checkbox" />
                <label>Bên mua</label>
              </li>
              <li className='con-sub'>
                <span>
                  <input type="checkbox" />
                  <label>Giá 1</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Giá 2</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Giá 3</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>KL 1</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>KL 2</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>KL 3</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Giá 1</label>
                </span>
              </li>
              <li className='col-option'>
                <input type="checkbox" />
                <label>Khớp lệnh</label>
              </li>
              <li className='con-sub'>
                <span>
                  <input type="checkbox" />
                  <label>Giá</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>KL</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>% và +/-</label>
                </span>
              </li>
              <li className='col-option'>
                <input type="checkbox" />
                <label>Bên bán</label>
              </li>
              <li className='con-sub'>
                <span>
                  <input type="checkbox" />
                  <label>Giá 1</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Giá 2</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Giá 3</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>KL 1</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>KL 2</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>KL 3</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Giá 1</label>
                </span>
              </li>
              <li className='col-option'>
                <input type="checkbox" />
                <label>Tổng GT và Tổng KL</label>
              </li>
              <li className='col-option'>
                <input type="checkbox" />
                <label>Giá</label>
              </li>
              <li className='con-sub'>
                <span>
                  <input type="checkbox" />
                  <label>TB</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Cao</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Thấp</label>
                </span>
              </li>
              <li className='col-option'>
                <input type="checkbox" />
                <label>Dư</label>
              </li>
              <li className='con-sub'>
                <span>
                  <input type="checkbox" />
                  <label>Bán</label>
                </span>
                <span>
                  <input type="checkbox" />
                  <label>Mua</label>
                </span>
              </li>
              <li className='col-option'>
                <input type="checkbox" />
                <label>ĐTNN</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ModalBox
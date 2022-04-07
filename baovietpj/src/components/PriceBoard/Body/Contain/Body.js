import React from 'react'
import Table from '../Table/Table'
import './Body.scss'
import NavBar from '../../Navbar/NavBar'

function Body() {
  return (
    <div className='body'>
      <NavBar />
      <Table />
    </div>
  )
}

export default Body
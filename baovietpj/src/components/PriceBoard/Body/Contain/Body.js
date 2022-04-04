import React from 'react'
import Table from '../Table/Table'
import './Body.scss'
import { useSelector } from 'react-redux'
import NavBar from '../../Navbar/NavBar'

function Body() {
  const themeMode = useSelector((state) => state.Theme.themeMode)
  return (
    <div className='body'>
      <NavBar />
      <Table />
    </div>
  )
}

export default Body
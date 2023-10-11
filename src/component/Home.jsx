import React from 'react'
import Headers from './header/Headers'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
const authentication =useSelector((store)=> store.authentication)
console.log(`Bhairav`,authentication);
  return (
  <>
  <Headers />
  i am home page
  </>
  )
}

export default Home
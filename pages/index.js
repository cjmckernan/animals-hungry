import Link from 'next/link'
import { useState } from 'react'
import Animals from './components/Animals'
import fetch from 'isomorphic-unfetch'


const Home = ({ animals }) => {
  let isEdited = false
  return (        
    <div className="flex justify-center items-center h-screen">
    <Animals animals={animals} />
      <div className={isEdited ? undefined : 'hidden'}>
        <div className="">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded'>Save Changes</button>
        </div>
      </div> 
    </div>
  )
}
// Retrieve initial data 
Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/animals')
  const { data } = await res.json();

  return { animals: data }
}


export default Home;
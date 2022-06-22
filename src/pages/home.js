import React from 'react'
import Bar from '../components/bar'
import Navbar from '../components/navbar'
import Results from '../components/results'
import Slider from '../components/slider'

function Home() {
  return (
    <div>
        <Bar/>
        <Navbar/>
        <Slider/>
        <Results/>

    </div>
  )
}

export default Home
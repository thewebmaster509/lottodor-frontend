import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
    return (
        <div>
            <div className='card is-flex p-4 '>
                <img src={logo} width={50} />
                <button className='button is-light is-small ml-4 mt-3'>Resultats</button>
                <button className='button is-light is-small ml-4 mt-3'>Mes jeux</button>
                <button className='button is-light is-small ml-4 mt-3'>Jackpot D'or</button>
                <button className='button is-light is-small ml-4 mt-3'>Tirage D'or</button>
            </div>
        </div>
    )
}

export default Navbar
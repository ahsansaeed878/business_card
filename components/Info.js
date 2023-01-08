import React from 'react'

export default function Info(){
    return (
        <nav className='display-flex nav--style'>
            <img className='nav--img' src='./images/picture.jpeg' />
            <h2 className='nav--name'>Ahsan Saeed</h2>
            <p className='nav--title'>ROR Developer</p>
            <p className='nav--website'>ahsansaeed.ai</p>
            <div className='nav--button display-flex'>
                <button className='display-flex nav--button_email'>
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </button>
                <button className='display-flex nav--button_linkedin'>
                    <i className="fa-brands fa-linkedin"></i>
                    Linkedin
                </button>
            </div>
        </nav>
    )
}
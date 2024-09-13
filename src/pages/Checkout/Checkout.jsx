import React from 'react'
import Header from '../../components/SiteHeader/SiteHeader'
import "./Checkout.scss"
import { Link } from 'react-router-dom'

export default function Checkout() {
  return (
    <>
    <Header/>
    <div className='checkout'>
    <div>
      <p className='checkout__text'>Thank you for subscribing to the Telus personalized streaming service.</p>
    </div>
    <div className='checkout__button-wrapper'>
    <Link to="/bookshelf">
            <button className="checkout__button" type="button">Your Streams</button>
    </Link>
    </div>
    </div>
    </>
  )
}

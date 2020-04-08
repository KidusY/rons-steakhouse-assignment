import React, { Component } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <section className='Nav'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/MenuPage'>
          Menu
        </Link>
        <Link to='/bio'>
          Bio
        </Link>
      </section>
    )
  }
}

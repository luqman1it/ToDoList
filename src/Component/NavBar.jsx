import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Style.css'
export default function NavBar() {
    return (
        <div className='navBar'>
            <NavLink className='navBarLink' to='/'>الكل </NavLink>
            <NavLink className='navBarLink' to='/completed'>منجز </NavLink>
            <NavLink className='navBarLink' to='/nocompleted'>غير منجز </NavLink>
        </div>
    )
}

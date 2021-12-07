import React,{useState} from 'react'
import { Link, useLinkClickHandler } from 'react-router-dom'
import { Data } from './Data'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import './styles/Header.scss'
import { FaSearch } from 'react-icons/fa'

const Header = () => {

    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className='sum'>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <FaBars onClick={showMenu}/>
                </Link>
                <Link to='#' className='header-text'>
                    <h1>Shop</h1>
                </Link>
                <div className='r-side'>
                <div className="logo">
                <h1>ESIDE</h1>
                </div>
                <div className="search">
                    <FaSearch/>
                    <h3>CART</h3>
                </div>
                </div>
            </div>
            <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showMenu}>
                        <li>
                            <Link to='#' className='menu-bars close'>
                                    <AiOutlineClose/>
                            </Link>
                        </li>
                        {Data.map((item,index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>

            </nav>

        </div>
    )
}

export default Header

"use client"

import Link from 'next/link'
import React from 'react'
import './navbar.css'

export const Navbar = () => {
    return (
        <>
            <div className="navbarencia">
                <div>
                    <ul className="sidebar">
                        <div className="logo">
                            <img src="/logoOtto.png" alt="imagen-logo"/>
                                <h2 className="blanco">Otto</h2>
                                <h2 className="rojo">Krause</h2>
                        </div>
                        <li onClick={() => hideSidebar()} class="sidebarbig2"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></li>
                    <li><Link className="blanco" href="/">Inicio</Link></li>
                    <li><Link className="rojo" href="/productos">Productos</Link></li>
                    <li><Link className="blanco" href="https://www.instagram.com/mario_store_krause/">Contacto</Link></li>
                    <li><Link className="rojo perfil" href="/login">Login</Link></li>
                </ul>
                <nav className="navbar">
                    <ul>
                        <div className="logo">
                            <img src="/logoOtto.png" alt="imagen-logo"/>
                                <h2 className="blanco">Otto</h2>
                                <h2 className="rojo">Krause</h2>
                        </div>
                        <li><Link className="hideOnmobile" href="/" id="blanco">Inicio</Link></li>
                        <li><Link className="hideOnmobile" href="/productos" id="rojo">Productos</Link></li>
                        <li><Link className="hideOnmobile" href="https://www.instagram.com/mario_store_krause/" id="blanco" >Contacto</Link></li>
                        <li><Link className="hideOnmobile perfil" href="/login" id="rojo">Login</Link></li>
                        <li onClick={() => showSidebar()} class="sidebarbig"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M100.782-212.303v-106.001h758.436v106.001H100.782Zm0-214.696v-106.002h758.436v106.002H100.782Zm0-214.697v-106.001h758.436v106.001H100.782Z" /></svg></li>
                </ul>
            </nav>
        </div >
</div >
        </>
    )
}

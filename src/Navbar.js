import React from 'react';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';

// import "./css/App.scss"
function Navbar() {
    return (
        <>
        <header>
        <nav className='Navbar'>
           <ul className='Navbar-logo'>
           <h1> Logo</h1>
           </ul>
           <section className='Navbar-lista'>
           <CustomLink to='/notas'>Notas</CustomLink>
           <CustomLink to='/contact'>Sobre</CustomLink>
           </section>
        </nav>
        </header>
      <main>
            <Outlet/>
      </main>
        </>
    );
}
function CustomLink({to,children,...props}){
    const resolvedPath=useResolvedPath(to)
    const isActive=useMatch({path:resolvedPath.pathname,end:true})
    return(
        <li className={isActive?"active":""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}

export default Navbar;
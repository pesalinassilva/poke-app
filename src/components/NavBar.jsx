import { NavLink } from "react-router-dom"

const NavBar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container justify-content-start">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="logo-pokemon"/>
                </div>
                <div className="container-fluid justify-content-end gap-3">
                    <NavLink className={setActiveClass} to='/'>Home</NavLink>
                    <NavLink className={setActiveClass} to='/Pokemones'>Pokemones</NavLink>
                </div>
            </nav>
        </>
    )
}


export default NavBar
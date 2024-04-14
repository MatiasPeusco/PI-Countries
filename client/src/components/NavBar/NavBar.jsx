import { Link } from "react-router-dom";
import { List, ListItem, Logo, Nav } from "./StyledNavbar";
import { useState, useEffect } from "react";

const Navbar = () => {
    // Estado para controlar si la barra de navegación debe cambiar de estilo al hacer scroll
    const [navScroll, setNavScroll] = useState(false);

    // Función que cambia el estado de la barra de navegación al hacer scroll
    const changeNav = () => {
        if (window.scrollY >= 90) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        }
    };

    // Efecto que se ejecuta al montar el componente para añadir un listener de scroll
    useEffect(() => {
        window.addEventListener("scroll", changeNav);
        return () => {
            window.removeEventListener("scroll", changeNav);
        };
    }, []);

    return (
        <Nav navScroll={navScroll}>
            <Logo>Countries</Logo>
            <List>
                <ListItem>
                    <Link to="/home">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/about">About</Link>
                </ListItem>
                <ListItem>
                    <Link to="/create">Create</Link>
                </ListItem>
            </List>
        </Nav>
    );
};

export default Navbar;
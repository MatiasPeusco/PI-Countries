import { Container, Socials } from "../Footer/StyledFooter"; // Importar componentes y estilos
import { Link } from "react-router-dom"; // Importar Link de react-router-dom
import LinkedIn from "../../assets/linkedin.svg";
import GitHub from "../../assets/github.svg";

// Definición del componente funcional Footer
const Footer = () => {
    return (
        <Container>
            {/* Iconos sociales */}
            <Socials>
                {/* Enlace al perfil de GitHub */}
                <Link
                    to="https://github.com/MatiasPeusco"
                    className="social"
                    target="_blank"
                >
                    <img alt="Logo de GitHub" title="Link a GitHub" src={GitHub} />
                </Link>
                {/* Enlace al perfil de LinkedIn */}
                <Link
                    to="https://www.linkedin.com/in/matias-peuscovich-444271134/"
                    className="social"
                    target="_blank"
                >
                    <img alt="Logo de LinkedIn" title="Link a LinkedIn" src={LinkedIn} />
                </Link>
            </Socials>
            {/* Derechos de autor */}
            <span className="copyright">Copyright 2024 - Matias Peuscovich</span>
        </Container>
    );
};

export default Footer; // Exportar el componente Footer
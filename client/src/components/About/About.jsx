import {
    Container,
    Image,
    ImageContainer,
    Left,
    TechnologiesContainer,
} from "./StyledAbout";
import { Link } from "react-router-dom";
import react from "../../assets/images/react.svg";
import redux from "../../assets/images/redux.svg";
import nodejs from "../../assets/images/nodejs.svg";
import express from "../../assets/images/express.svg";
import postgresql from "../../assets/images/postgresql.svg";
import sequelize from "../../assets/images/sequelize.svg";
import Navbar from "../Navbar/Navbar";
import GoBackComponent from "../GoBack/goback";
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <Container>
                <GoBackComponent />
                <Left className="about-description">
                    {/* Sección de descripción */}
                    <section>
                        <h2>About this application</h2>
                        <p>
                            Countries is a website to learn more about the world. It is my individual
                            project in the Soy Henry Bootcamp.
                        </p>
                    </section>
                    {/* Sección de tecnologías utilizadas */}
                    <section>
                        <h2>Technologies Used</h2>
                        <TechnologiesContainer>
                            {/* Enlaces a las páginas de documentación de las tecnologías */}
                            <ImageContainer>
                                <Link to="https://reactjs.org/" target="_blank">
                                    <Image src={react} /> {/* Logo de React */}
                                </Link>
                            </ImageContainer>
                            <ImageContainer>
                                <Link to="https://redux.js.org/" target="_blank">
                                    <Image src={redux} /> {/* Logo de Redux */}
                                </Link>
                            </ImageContainer>
                            <ImageContainer>
                                <Link to="https://nodejs.org/" target="_blank">
                                    <Image src={nodejs} /> {/* Logo de Node.js */}
                                </Link>
                            </ImageContainer>
                            <ImageContainer>
                                <Link to="https://expressjs.com/" target="_blank">
                                    <Image src={express} /> {/* Logo de Express */}
                                </Link>
                            </ImageContainer>
                            <ImageContainer>
                                <Link to="https://www.postgresql.org/" target="_blank">
                                    <Image src={postgresql} /> {/* Logo de PostgreSQL */}
                                </Link>
                            </ImageContainer>
                            <ImageContainer>
                                <Link to="https://sequelize.org/" target="_blank">
                                    <Image src={sequelize} /> {/* Logo de Sequelize */}
                                </Link>
                            </ImageContainer>
                        </TechnologiesContainer>
                    </section>
                </Left>
            </Container>
            <Footer />
        </>
    );
};

export default About; // Exportar el componente About